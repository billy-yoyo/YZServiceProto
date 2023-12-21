
export const CONSENT_FORM = {
    "cn": {
        title: "参与者同意书",
        projectTitle: {
            key: "项目名称：",
            value: "跨文化适应的服务设计——以中国留学生赴英留学为例"
        },
        researcherDetails: {
            key: "研究者信息：",
            value: "鐘藝    P2676736@my365.dmu.ac.uk"
        },
        description: "该协议是针对 2024 年 1 - 2 月进行的需要被记录的问卷调查而达成的。",
        instruction: "如果您已阅读并理解以下内容，请填写你的姓名以及学校邮箱，并点击 “同意” （填写学校邮箱仅为了确认真实学生身份以及接收优惠卷奖励，所有个人信息将会被匿名处理，并在研究后及时删除：",
        consentBoxes: [
            "我确认我已阅读并理解上述研究的参与者信息表。我有机会考虑这些信息，提出问题，这些都得到了满意的回答。",
            "我同意我的数据被拟匿名化并安全存储。",
            "我明白我的参与是自愿的。我也明白我可以随时自由退出 - 无需给出任何理由，也不会产生任何负面后果。我可以拒绝回答任何特定的问题。",
            "我同意不可识别的数据可以发表在文章中/用于会议发表/演讲/写成论文或理论。",
            "我了解德蒙福特大学已经审查并批准了这项研究。",
            "我了解研究期间收集的数据已经过德蒙福特大学研究导师的检查。我允许研究导师访问我的数据。",
            "我同意参加上述研究项目。",
            "我同意上述研究人员与我联系。"
        ],
        participantName: "姓名",
        participantEmail: "学校邮箱",
        signature: "参与者签名",
        date: "日期"
    },
    "en": {
        title: "PARTICIPANT CONSENT FORM",
        projectTitle: {
            key: "Title of Research Project:",
            value: "Service design for intercultural adaptation: The case of Chinese international postgraduate taught students in the UK"
        },
        researcherDetails: {
            key: "Researcher details:",
            value: "Yi Zhong    P2676736@my365.dmu.ac.uk"
        },
        description: "This agreement is made in regard to the questionnaire that will take place between December 2023 and Febuary 2024.",
        instruction: "If you have read and understood the following content, please fill in your name and school email address, and click \"Agree\" (filling in the school email address is only to confirm the real student identity and receive coupon rewards. All personal information will be processed anonymously and deleted promptly after research):",
        consentBoxes: [
            "I confirm that I have read and understood the Participant Information Sheet for the study above.  I have had the opportunity to consider the information, ask questions and these have been answered satisfactorily.",
            "I agree to my data being pseudonymised and stored securely. ",
            "I understand that my participation is voluntary. I also understand I am free to withdraw at any time - without giving any reason and without there being any negative consequences. I can decline to answer any particular question or question.",
            "I agreed that non-identifiable data may be published in articles/used in conference presentations/included in a performance/written up as a dissertation/thesis. ",
            "I understand that De Montfort University has reviewed and approved this study.",
            "I understand that the data collected during the study has been inspected by a supervisor from De Montfort University. I give permission for the Supervisor to have access to my data. ",
            "I agree to take part in the above research project.",
            "I agree to be contacted by the researcher named above."
        ],
        participantName: "Name",
        participantEmail: "University e-mail",
        signature: "Participant signature",
        date: "Date"
    }
} as const;
