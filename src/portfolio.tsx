import emoji from 'react-easy-emoji';

export const greeting = {
	username: '권범규',
	title: 'DEV KBK',
	subTitle: emoji("프론트 엔드 개발자"),
	// role: "Your role",
	resumeLink: "http://rkwlrkwlak.dothome.co.kr/",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/Kwon-Bum-Kyu',
	linkedin: 'https://www.linkedin.com/in/%EB%B2%94%EA%B7%9C-%EA%B6%8C-ba5639209/',
	email: 'missing107@naver.com',
	facebook: 'https://www.facebook.com/profile.php?id=100007533872928',
	// twitter: "Your twitter link",
	instagram: "https://www.instagram.com/FE_KBK/",
	// medium: 'Your medium link',
	// stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "subtitle for skill",
	describeSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		{fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: false
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2016.09 ~ 2016.12",
			company: "카젠",
			role: "카젠 연구소 수습",
		},
		{
			date: "2017.04 ~ 2018.02",
			company: "큐랩",
			role: "큐랩 웹 개발자",
		},
		{
			date: "2020.09",
			company: "베스텔라랩",
			role: "프론트 엔드 개발자 (앱)",
		},
	
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "프로젝트 모음",
	lists: [
		{
			title: "워치마일",
			desc: "실내 주차장 내비게이션",
			url: "https://play.google.com/store/apps/details?id=com.vestellalab.watchmilepublic"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: false
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "subtitle for contact",
	introduce: emoji("your introduce❤"),
	view: true
}