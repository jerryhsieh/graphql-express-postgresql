var courseData = [
    {
	id: 1,
	title: 'The complete Node.js course',
	author: 'Andrew Mead, Jerry Hsieh',
	description: 'Learn node.js in a real world application',
	topic: 'Node.js',
	url: 'https://www.onionstudio.com.tw'
    },
    {
	id: 2,
	title: 'Node.js Express and MongoDB developemnt',
	author: 'Brad Traversy',
	topic: 'Node.js',
	url: 'https://www.onionstudio.com.tw'
    },
    {
	id: 3,
	title: 'Javascript: Understanding the weired part',
	author: 'Jerry Hsieh',
	topic: 'Javascript',
	url: 'https://www.onionstudio.com.tw'
    }
];

const resolvers = {
    Query: {
	allCourses: () => {
	    return courseData;
	},
	course: (root, {id}) => {
	    return courseData.filter(course => {
		return course.id === id;
	    })[0];
	}
    }
} 

export default resolvers;
