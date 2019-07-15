export default {
  base: {
    curLanguage: '当前语言'
  },
  login: {
    graduateSdu: '山东大学研究生院',
    rememberPassword: '记住密码',
    forgetPassword: '忘记密码',
    showPassword: '显示密码',
    hidePassword: '隐藏密码',
    placeholdUsername: '您的学生账户',
    placeholdPassword: '请输入密码',
    loginTitle: '登录',
    authenticationLogin: '统一认证登录',
    manaegerTitle: '留学生研究生信息管理系统',
    noticeTitle: '友情提示',
    notice1: '（1）学生登陆为学生学号，缺省密码为前缀D（博士）/ 硕士（M）+证件号码后7位，证件号码中的字母为大写字母',
    notice2: '（2）建议使用9.0以上的IE浏览器或google浏览器,360浏览器请选用极速模式'
  },
  route: {
    loginTitle: '标题',
    personInformation: '个人信息',
    changePassword: '修改密码',
    schoolRoll: '学籍信息',
    studentInformance: '学生表现信息',
    pygl: '培养管理',
    xjhpygl: '学籍和培养管理',
    dyzxzm: '打印在学证明',
    pyfayxsgrjh: '培养方案与学生个人计划',
    pyfacx: '培养方案查询',
    ckbrpyfa: '查看本人培养方案',
    zdckpyjh: '制订查看培养计划',
    kcyxk: '课程与选课',
    kccx: '课程查询',
    jxapdc: '教学安排导出',
    xsxk: '学生选课',
    cjgl: '成绩管理',
    cjcx: '成绩查询',
    zqkh: '中期考核',
    tjktbg: '提交开题报告',
    byhxwgl: '毕业和学位管理',
    txxwxx: '填写学位信息',
    tjbysq: '提交毕业申请',
    xxsclw: '学生上传论文',
    cklwpyjg: '查看论文评阅结果',
    txbsdbgg: '填写博士答辩公告',
    lrdbjv: '录入答辩记录',
    pydbxxck: '评阅答辩信息查看',
    byxxhd: '毕业信息核对',
    xwxxhd: '学位信息核对',
    dagl: '档案管理',
    txqnml: '填写圈内目录',


    submit:"提交",
    modify: '修改',
    save: '保存',
    curPage: '现在位置',
  },

  //个人信息修改密码模块
  modifyPasswordModal:{
    oldPassword:'旧密码',
    inputNewPassword:'输入新密码',
    retypePassword:'重新输入密码',
    passwordLength:" 密码长度最大为20位",
    passwordWrong:"两次输入的密码不一致",
    reset:'重置'
  },

  //个人信息联系方式维护模块
  updateContactModal:{
    updateContact:"个人联系方式更新",
    Msn:'MSN',
    MainPageAddree:'主页地址',
    SdEmail:'山大邮件',
    ContactAddress:"通讯地址",
  },

  //学籍信息中个人基本信息
  baseInformationModal:{
    baseInformation: '基本信息',
    cultivationInformation: '培养信息',
    beforeSchool: '入学前信息',
    personalInformation: '个人基本信息',
    name: '姓名',
    englishName: '英文姓名',
    studentNumber: '学 号',
    sex: '性 别',
    nationality: '国 别 ',
    photo: '照片',
    date: '出生日期',
    ID: '证件号码',
    religion: '宗教信仰',
    person: '个人联系方式',
    contact: '联系电话',
    phone: '移动电话',
    qq: 'QQ号',
    wechat: '微信号',
    email: '电子邮件',
    remark: '备注',
  },

  cultivationInformationModal:{
    studentCultivationInfo:'学生培养信息',
    studentType:'学生类型',
    department:'所属院系',
    trainingWay:'培养方式',
    major:'所属专业',
    entranceDate:'入学年月',
    dapartTime:'预计离校时间',
    languageLevel:'外语水平',
    examNo:'准考证号',
    healthStatus:'健康状况',
    speciaties:"有何特长",
    economicStatus:'经济状况',
    financeSource:'本人经济来源',
    grade:'年级',
    tutor:'导师',
    studyStatus:"在学状态",
    class:"所在班级",
    campus:'所属校区',
    system:'学制',
    direction:'研究方向',
    sedCultivation:'二级培养单位',
    thirdCultivation:'三级培养单位',
    StudentStatusOrNot:'是否有学籍',
    courseTime:'上课时间',
    Note:'加 * 的为必填信息',
    Note1:'格式为"20070101" '
  },

  //入学前信息模块
  preSchoolInfoModal:{
    preSchoolInfoDisplay:"入学前信息显示",
    undergraduate:"本科阶段",
    undergraduateType:"本科毕业类别",
    undergraduateMajor:"本科毕业专业",
    undergraduateUniversity:"本科毕业学校",
    undergraduateDate:"本科毕业年月",
    undergraduateSchool: "本科毕业院系",
    undergraduateThesisTitle:"本科论文题目",
    bachelarDegree:"学士学位",
    bachelarDegreeMajor:"学士学位专业",
    bachelarDegreeType:"学士学位门类",
    bachelarDegreeUnit:"学士学位授予单位",
    bachelarDegreeGrantedDate :"获取学士学位年月",
    postgraduate:"硕士阶段",
    postgraduateType:'硕士毕业类别',
    postgraduateMajor:'硕士毕业专业',
    postgraduateUniversity:'硕士毕业学校',
    postgraduateDate:'硕士毕业年月',
    postgraduateSchool:'硕士毕业院系',
    postgraduateThesisTitle:'硕士论文题目',
    MasterDegree:'硕士学位',
    MasterDegreeMajor:'获硕士学位专业',
    MasterSubjectType:"硕士学科门类",
    MasterDegreeGrantUnit:"硕士学位授予单位",
    MasterDegreeDate:'获取硕士学位年月',
    remark:'备注'
  },

  //学生表现信息
  punishViolation:
    {
      PunishViolation:'惩处违纪',
      PunishInfo:'惩处信息',
      Num:'序号',
      PunishReason:'惩处原因',
      PunishClass:'惩处等级',
      punishType:'惩处类别',
      paperNumber:'文案编号',
      punishDepartment:'惩处部门',
      violationTime:'违纪时间',
      punishTime:'处罚时间',
      noPunishRecord:'无惩处记录',

    },

  //发表论文
  publishThesis:{
    publishThesis:'发表论文',
    thesisInfo:'论文信息',
    note:'1.与学位论文相关信息是博士论文自评表中发表论文相关的重要内容，请务必在博士匿名评阅送审前认真填写完成。 \n' +
      '2.学院秘书/书记审核通过该论文后，该论文信息则不可修改。若要修改论文信息，请联系审核通过的相应的学院秘书/书记，将该论文状态置为审核不通过后进行修改。 \n' +
      '3.学院秘书审核主要用研究生优秀成果评审和毕业与学位审核，书记审核主要用于奖学金评审。\n',
    publicationYear:'论文发表年度',
    publicationTime:'论文发表时间',
    to:'至',
    authorRanking:'作者位次',
    query:'查询',
    export:'导出',
    number:'序号',
    choice:'选择',
    thesisName:'论文名称',
    publicationTime1:'发表时间',
    conferenceTitle:'期刊会议名称',
    level:'级别',
    inclusion:'收录情况',
    selfRank:'本人位次',
    openOrNot:'是否公开',
    status:'状态',
    operation:'操作',
    setOpen:'设置公开',
    setNotOpen:'设置不公开',
    add:'添加',
  },

  //发表专著
  publishMonograph:{
    publishMonograph:'发表专著',
    note:'管理员审核通过该专著/教材后，该专著/教材信息则不可修改。 \n' +
      '学生->若要修改专著/教材信息，请联系审核通过的相应的学院秘书/书记将该专著/教材状态置为审核不通过后进行修改! \n' +
      '教师->若要修改专著/教材信息，请联系相应的学院秘书将该专著/教材状态置为审核不通过后进行修改!',
    monographInfo:"专著/教材信息",
    publishTime:'',
    to:'至',
    autherRank:'作者位次',
    number:'序号',
    choice:"选择",
    name:"名称",
    type:"类型",
    publishHouse:"出版社",
    publishDate:'出版日期',
    pageNumber:"页码数",
    version:'版次',
    price:'定价(元)',
    selfRank: '本人位次',
    isOpen:'是否公开',
    status:'状态',
    operation:'操作',
    note2:'没有符合的数据！',
    setOpen:'设置公开',
    setNotOpen:'设置不公开',
    add:'添加',
  },


  //专利
  patent:{
    note:'专利/著作权信息',
    note1:'管理员审核通过该专利/著作权后，该专利/著作权信息则不可修改。 \n' +
      '学生->若要修改专利/著作权信息，请联系审核通过的相应的学院秘书/书记将该专利/著作权状态置为审核不通过后进行修改! \n' +
      '教师->若要修改专利/著作权信息，请联系相应的学院秘书将该专利/著作权状态置为审核不通过后进行修改!',
    registerDate:'颁证日/登记日期:',
    to:'至',
    authorRanking:'作者位次:',
    query:'查询',
    number:'序号',
    choice:'选择',
    patentInfo:"专利/著作权名称",
    type:'类别',
    patentNo:'专利号/著作登记号',
    typeNo:'分类号',
    grantingDate:'颁证日/登记日期',
    selfRank:'本人位次',
    openOrNot: '是否公开',
    status:'状态',
    operation:'操作',
    note2:'SORRY:没有符合的数据!',
    setOpen:'设置公开',
    setNotOpen:'设置不公开',
    add:'添加',
  },

  //成果奖励信息查看
  achievement:{
    note:'限填用于毕业审核的科研成果奖励，以及用于奖学金评审的奖励奖项，不包括教学成果奖等奖励 ',
    note1:'填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过',
    certificateTime:'奖励证书时间',
    to:'至',
    authorRanking:'作者位次',
    awardYear:'奖励年度',
    note3:'e.g.2012',
    query:'查询',
    export:'导出',
    number:'序号',
    choice:'选择',
    awardName:'获奖名称',
    type:'类型',
    awardType:'获奖类别',
    awardRating:'获奖等级',
    awardLevel:'奖励级别',
    awardCertificateTime:'奖励证书时间',
    selfRanking:'本人位次',
    dataSource:'数据来源',
    status:'状态',
    operation:'操作',
    note4:'SORRY:没有符合的数据!',
    note5:'添加',
  },

  //参与项目
  projectParticipation:{
    title:'项目信息',
    note:'填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过',
    note1:'学生->若要修改项目信息，请联系审核通过的相应的学院秘书/书记将该项目状态置为审核不通过后进行修改!',
    note2:'教师->若要修改项目信息，请联系相应的学院秘书将该项目状态置为审核不通过后进行修改!',
    projectTime:'立项时间',
    to:'至',
    projectType:'项目类型',
    autherRank: '作者位次',
    query:'查询',
    number:'序号',
    choice:'选择',
    porjectName:'项目名称',
    type:'类别',
    projectRating:'项目等级',
    selfRank:'本人位次',
    openOrNot:'是否公开',
    status:'状态',
    operation:'操作',
    note3:'SORRY:没有符合的数据!',
    setOpen:'设置公开',
    setNotOpen:'设置不公开',
    add:'添加',
  },

  //查看本人培养方案
  cultivatingScheme:{
    cultivatingSchemeDetail:'培养方案详细信息',
    basicInfomation:'基本信息',
    studentType:'学生类型',
    major:'所属专业',
    schemeName:'方案名称',
    startTime:'起始时间',
    compulsoryCredit:'必修学分',
    totalCredit:'总学分',
    cultivatingObj:'培养目标',
    researchDirection:'研究方向',
    cultivatingMeans:'培养方式',
    studyYear:'学习年限',
    totalCreditAndCourse:'应修总学分与课程设置',
    cultivatingStep:'培养环节',
    researchandDissertation:'科学研究与学位论文',
    graduationAndDegree:'毕业及学位授予',
    comment:'备注',
  },




//培养方案查询
  cultivatingSchemeQuery:{
    studentType:'学生类型',
    school:'学院',
    major:'专业',
    year:'年份',
    query:'查询',
    ListOfCultivation:'培养方案列表',
    cultivatingSchemeName:'培养方案名称',
    major1:'所属专业',
    startTime:'起始时间',
    detail:'详细',
  }


















}
