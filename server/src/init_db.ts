const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://softwarebros:askversed@localhost:5432/askversed');

sequelize.authenticate()
.then(() => console.log("connection successful"))
.catch((err : any) => console.log("failed to connect" + err));

const Parent = sequelize.define('parent', {
  p_id: {
    type: Sequelize.BIGINT,
    primaryKey:true,
    autoIncrement:true
  },
  children: {
    type: Sequelize.ARRAY(Sequelize.BIGINT)
  },
  username: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  },
  salt: {
    type: Sequelize.TEXT
  },
  is_admin: {
    type: Sequelize.BOOLEAN
  },
  is_advisor: {
    type: Sequelize.BOOLEAN
  },
  active: {
    type: Sequelize.BOOLEAN
  }
});

Parent.sync({force: true});

const Advisor = sequelize.define('advisor', {
    a_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    p_id: {
      type: Sequelize.BIGINT,
      references: {
        model: Parent,
        key: "p_id"
      }
    },
    students: {
      type: Sequelize.ARRAY(Sequelize.BIGINT)
    },
    name: {
      type: Sequelize.TEXT
    },
    state: {
      type: Sequelize.TEXT
    },
    city: {
      type: Sequelize.TEXT
    },
    advice_college_admissions_process: {
      type: Sequelize.TEXT
    },
    advice_general_hs_guidance: {
      type: Sequelize.TEXT
    },
    advice_special_hs_guidance: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT,
    },
    phone_number: {
      type: Sequelize.TEXT,
    },
    username: {
      type: Sequelize.TEXT
    },
    country: {
      type: Sequelize.TEXT
    },
    languages: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    hc_academic_ec_interests: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    sports: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    charge_30: {
      type: Sequelize.DECIMAL(13, 2)
    },
    charge_60: {
      type: Sequelize.DECIMAL(13, 2)
    },
    mailing_address: {
      type: Sequelize.TEXT
    }
});

Advisor.sync({force: true});

interface parent {p_id: any, children: any, username: any, password: any, salt: any, is_admin: any, is_advisor: any, active: any};
const createNewParent = ({p_id, children, username, password, salt, is_admin, is_advisor, active} : any, cb: Function) => {
  console.log("username" + username);
  Parent.create({
    p_id,
    children,
    username,
    password,
    salt,
    is_admin,
    is_advisor,
    active
  }).then( (parentInfo: any) => cb(parentInfo));
};

const createNewAdvisor = ({a_id, p_id, students, name, state, city, advice_college_admissions_process, advice_general_hs_guidance, advice_special_hs_guidance, email, description, phone_number, username, country, languages, hs_academic_ec_interests, sports, charge_30, charge_60, mailing_address}: any, cb: Function) => {
  Advisor.create({
    a_id,
    p_id,
    students,
    name,
    state,
    city,
    advice_college_admissions_process,
    advice_general_hs_guidance,
    advice_special_hs_guidance,
    email,
    description,
    phone_number,
    username, country,
    languages,
    hs_academic_ec_interests,
    sports,
    charge_30,
    charge_60,
    mailing_address
  }).then( (advisorInfo: any) => cb(advisorInfo));
}

const updateAdvisor = (adv_info: any, cb: Function) => {
  Advisor.update({
    ...adv_info,
  }, {
    where: {
      a_id: adv_info.a_id
    }
  }).then( (adv: any ) => cb(adv));
}

const updateParent = (parent_info: any, cb: Function) => {
  Parent.update({
    ...parent_info,
  }, {
    where: {
      p_id: parent_info.p_id
    }
  }).then( (adv: any ) => cb(adv));
}


const getAdvisor = (a_id: String, cb: Function) => {
  Advisor.findOne({
    where: {
      a_id
    }
  }).then( (adv: any) => cb(adv));
}

const getParent = (email: String, cb: Function) => {
  Parent.findOne({
    where: {
      username: email
    }
  }).then((parent: any) => cb(parent));
}

module.exports = {sequelize, Advisor, Parent, createNewParent, createNewAdvisor, updateAdvisor, getAdvisor, getParent};
