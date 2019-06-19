export default {
  base: {
    curLanguage: 'Language'
  },
  login: {
    graduateSdu: 'Graduate School of Shandong University',
    rememberPassword: 'remember-password',
    forgetPassword: 'forget',
    showPassword: 'show',
    hidePassword: 'hide',
    placeholdUsername: 'please input your username',
    placeholdPassword: 'please input your password',
    loginTitle: 'Login',
    authenticationLogin: 'Unified authentication login ',
    manaegerTitle: 'SDU Graduates Academic Affairs Portal',
    noticeTitle: 'Friendship tips',
    notice1: 'The default password is prefix D (Doctor)/Master (M)+7 digits after the ID number. The letters in the ID number are capital letters.',
    notice2: 'It is recommended to use IE browser or Google browser above 9.0, and 360 browser should choose extreme speed mode'
  },
  menu: {
    application_menu: 'application menu'
  },
  route: {

    loginTitle: 'title',
    personInformation: 'personal information',
    changePassword: 'change password',
    schoolRoll: 'enrollment status',
    studentInformance: 'student informance',
    pygl: 'cultivation management',
    xjhpygl: 'status and cultivation',
    dyzxzm: 'print the education certificate',
    pyfayxsgrjh: 'cultivation and students\' plan',
    pyfacx: 'cultivation  inquiry',
    ckbrpyfa: 'cultivation scheme inquiry',
    zdckpyjh: 'check cultivation scheme',
    kcyxk: 'courses and course selection',
    kccx: 'course inquiry',
    jxapdc: 'export teaching arrangement',
    xsxk: 'student\'s course selection',
    cjgl: 'grade management',
    cjcx: 'grade inquiry',
    zqkh: 'midterm assessment',
    tjktbg: 'submit opening report',
    byhxwgl: 'graduation and degree',
    txxwxx: 'degree information',
    tjbysq: 'graduation application',
    xxsclw: 'thesis uploading',
    cklwpyjg: 'thesis review',
    txbsdbgg: 'doctor oral defence announcement',
    lrdbjv: 'oral defence record input',
    pydbxxck: 'oral defence review',
    byxxhd: 'check the graduatrion information',
    xwxxhd: 'degree information check',
    dagl: 'archive management',
    txqnml: '填写圈内目录',
    submit: 'submit',
    modify: 'modify',
    save: 'save',
    curPage: 'current page'

  },

  // 个人信息修改密码模块
  modifyPasswordModal: {
    oldPassword: 'Previous password',
    inputNewPassword: 'Input new password',
    retypePassword: 'Retype password',
    passwordLength: 'The maximum length of the password is 20',
    passwordWrong: 'Inconsistent password entered twice',
    reset: 'reset'
  },

  // 个人信息联系方式维护模块
  updateContactModal: {
    updateContact: 'Update personal contact',
    Msn: 'MSN',
    mainPageAddress: 'home page address',
    SdEmail: 'Email of ShanDong university',
    ContactAddress: 'Contact address'
  },

  // 学籍信息中个人基本信息
  baseInformationModal: {
    baseInformation: 'base information',
    cultivationInformation: 'cultivation information',
    beforeSchool: 'before school information',
    personalInformation: 'personal information',
    name: 'name',
    englishName: 'English name',
    studentNumber: 'student number',
    sex: 'sex',
    nationality: 'nationality',
    photo: 'photo',
    date: 'date of birth',
    ID: 'ID number',
    religion: 'religion',
    person: 'personal contact number',
    contact: 'Contact number',
    phone: 'mobile phone number',
    qq: 'qq number',
    wechat: 'wechat',
    email: 'E-mail',
    remark: 'remark'
  },

  cultivationInformationModal: {
    studentCultivationInfo: 'Student cultivating information',
    studentType: 'Student type',
    department: 'School',
    trainingWay: 'Cultivating mode',
    major: 'Major',
    entranceDate: 'Date of entrance',
    dapartTime: 'Expected date of departure',
    languageLevel: 'Language level',
    examNo: 'Candidate number',
    healthStatus: 'Health status',
    speciaties: 'Specialties',
    financeStatus: 'Financial status',
    financeSource: 'Financial source',
    grade: 'Grade',
    tutor: 'Tutor',
    studyStatus: 'Status of study',
    class: 'Class',
    campus: 'Campus',
    system: 'System',
    direction: 'Research direction',
    sedCultivation: 'Secondary cultivating unit',
    thirdCultivation: 'Tertiary cultivating unit',
    StudentStatusOrNot: 'With or withour status',
    CourseName: 'Course time',
    Note: 'Blanks with * are required information',
    Note1: 'The format is 20070101'
  },

  // 入学前信息模块
  preSchoolInfoModal: {
    preSchoolInfoDisplay: 'Pre-School Information',
    undergraduate: 'Undergraduate ',
    undergraduateType: 'Graduation type',
    undergraduateMajor: 'Major',
    undergraduateUniversity: 'University',
    undergraduateDate: 'Date of Graduation.(eg.20070101)',
    undergraduateSchool: 'School',
    undergraduateThesisTitle: 'Thesis title',
    bachelarDegree: "Bachelar's degree",
    bachelarDegreeMajor: 'Major of bachelor’s degree',
    bachelarDegreeType: 'Type of bachelor’s degree',
    bachelarDegreeUnit: "Bachelor's degree granting institution",
    bachelarDegreeGrantedDate: "Date of bachelor's degree granting",
    postgraduate: 'Postgraduate',
    postgraduateType: 'Graduation type',
    postgraduateMajor: 'Major',
    postgraduateUniversity: 'University',
    postgraduateDate: 'Date of graduation.(eg.20070101)',
    postgraduateSchool: 'School',
    postgraduateThesisTitle: 'Thesis title',
    MasterDegree: "Master's degree",
    MasterDegreeMajor: 'Major of master’s degree',
    MasterSubjectType: 'Type of master’s degree',
    MasterDegreeGrantUnit: "Master's degree granting institution",
    MasterDegreeDate: "Date of bachelor's degree granting",
    remark: 'remark'
  },

  // 发表论文
  publishThesis: {
    publishThesis: 'publish thesis',
    thesisInfo: 'thesis information',
    note: '1. The information related to the dissertation is an important part of the dissertation published in the doctoral dissertation self-assessment form. Please be sure to fill it out carefully before the doctor\'s anonymous review.\n' +
      '2. After the college secretary/secretary approves the paper, the paper information cannot be modified. To modify the paper information, please contact the corresponding college secretary/secretary approved by the review and set the status of the paper to be revised after the review is not passed.\n' +
      '3. The college secretary audit mainly uses postgraduate excellent results evaluation and graduation and degree review. The secretary review is mainly used for scholarship review.',
    publicationYear: 'Thesis publication year',
    publicationTime: 'Thesis publication date',
    to: 'to',
    authorRanking: 'author rank',
    query: 'query',
    export: 'export',
    number: 'number',
    choice: 'choice',
    thesisName: 'thesis name',
    publicationTime1: 'Thesis publication date',
    conferenceTitle: 'Journal conference name',
    level: 'level',
    inclusion: 'inclusion situdation',
    selfRank: 'My ranking',
    openOrNot: 'Open or not',
    status: 'status',
    operation: 'Operation',
    setOpen: 'Set it opem',
    setNotOpen: 'Set it private ',
    add: 'add'
  }

}
