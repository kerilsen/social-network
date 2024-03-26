const users = [
    'CyberNinja92',
    'PixelPioneer77',
    'CodeWizard123',
    'DataDynamo44',
    'TechSavvy99',
    'DigitalGuru86',
    'ByteMaster55',
    'WebWarrior78',
    'GeekyGenius23',
    'LogicLioness',
    'BinaryBeast89',
    'PixelPirate66',
    'InfiniteLoop42',
    'CyberSphinx78',
    'TechieTitan47',
    'DevDreamer71',
    'CodeCrusader88',
    'PixelProphet55',
    'DataDiva99',
    'WebWizardry123'
]

const email = [
    'gmail.com',
    'hotmail.com',
    'yahoo.com',
    'icloud.com',
]

const thoughts = [
    'Web development has evolved tremendously over the years, from basic HTML pages to dynamic and interactive web applications.',
    'Understanding HTML, CSS, and JavaScript forms the foundation of web development.',
    'CSS frameworks like Bootstrap and Tailwind CSS streamline the process of designing responsive and visually appealing websites.',
    'JavaScript frameworks and libraries such as React, Angular, and Vue.js empower developers to build complex web applications with ease.',
    'APIs play a crucial role in web development, allowing different software systems to communicate and exchange data seamlessly.',
    'Server-side scripting languages like PHP, Python, and Node.js enable dynamic content generation and database interaction.',
    'Content Management Systems (CMS) like WordPress and Drupal provide powerful tools for building and managing websites without extensive coding knowledge.',
    'Version control systems like Git are essential for collaborative web development, enabling teams to track changes and work on projects efficiently.',
    'Progressive Web Apps (PWAs) combine the best features of web and mobile apps, offering users a seamless experience across devices.',
    'Accessibility is a fundamental aspect of web development, ensuring that websites are usable by people with disabilities.',
    `Search Engine Optimization (SEO) techniques help improve a website's visibility and ranking in search engine results, driving organic traffic.`,
    'Responsive web design ensures that websites look and perform well across various devices and screen sizes, enhancing user experience.',
    'Web performance optimization techniques such as minification, caching, and lazy loading help speed up website loading times.',
    'Cross-browser compatibility testing ensures that websites function correctly on different web browsers, preventing compatibility issues.',
    'Security is a top priority in web development, with measures such as HTTPS encryption, input validation, and secure authentication mechanisms being essential.',
    'Web development frameworks like Django (Python), Ruby on Rails (Ruby), and Express.js (Node.js) provide a structured and efficient way to build web applications.',
    'Front-end development tools like Visual Studio Code, Sublime Text, and Atom offer developers powerful features for writing and debugging code.',
    'Continuous Integration (CI) and Continuous Deployment (CD) practices automate the process of building, testing, and deploying web applications, improving efficiency and reliability.',
    'Websockets enable real-time communication between clients and servers, facilitating features like chat applications and live updates.',
    'The rise of static site generators like Jekyll, Hugo, and Gatsby has simplified the process of building fast and secure websites with minimal server-side processing.',
]

const reactions = [
    'I totally agree!',
    'Right on!',
    'You should think about that again.',
    'I have never thought of that before.',
    `That's a great idea!`,
    'Exactly!',
    'Spot on!',
    `I couldn't have said it better myself.`,
    'Interesting point!',
    'Well said!',
    `I'm with you on that one.`,
    'Tell me more!',
    `I'm intrigued!`,
    `You've got a good point.`,
    'I see what you mean.',
    `That makes perfect sense.`,
    `I'm impressed!`,
    `I hadn't considered that angle.`,
    `You've given me something to think about.`,
    `I'm on board!`,
    `Absolutely!`,
    `Precisely!`,
    `I'm in complete agreement.`,
    `You're onto something there.`,
    `I'm on the same page.`,
    `Bravo!`,
    `Couldn't agree more.`,
    `You're absolutely right.`,
    `I'm sold!`,
    `You're making a lot of sense.`,
    `That's an interesting perspective.`,
    `I'm all ears!`,
    `You're speaking my language.`,
    `I'm nodding along.`,
    `Well, aren't you insightful!`,
    `You've hit the nail on the head.`,
    `You're absolutely spot-on.`,
    `I'm with you 100 percent.`,
    `You're reading my mind!`,
    `That's music to my ears.`,
    `I'm on the same wavelength.`,
    `You're singing my tune.`,
    `You're absolutely singing my tune.`,
    `I couldn't have put it better myself.`,
    `You're absolutely hitting the nail on the head.`,
    `You're absolutely spot-on.`,
    `You're speaking my language.`,
    `You're absolutely speaking my language.`,
    `I'm with you 100 percent.`,
    `You're absolutely hitting the nail on the head.`
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (int) => Math.floor(Math.random() * int);
const getRandomEmail = () => `@${getRandomArrItem(email)}`;

// Randomly get up to 5 reactions per thought
const getReactions = () => {
    const results = [];
    let int = getRandomInt(5);
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomArrItem(users)
        });
    }
    return results;
}

const getThoughts = () => {
    const results = [];
    for (let i = 0; i < thoughts.length; i++) {
        results.push({
            thoughtText: thoughts[i],
            username: users[i],
            reactions: getReactions()
        })
    }
    return results;
};

// Get a random number of friends from 0-19 (users.length-1)
const getFriends = (user) => {
    const results = [];
    const int = getRandomInt(users.length - 1)
    for (let i = 0; i < int; i++) {
        results.push(getRandomArrItem(users))
    }
    // Filter results to make sure the user is not one of them
    const filter = results.filter(str => str !== user);
    // Remove duplicate friends from the array
    const unique = [...new Set(filter)];
    return unique;
};

const getUsers = () => {
    const results = [];
    for (let i = 0; i < users.length; i++) {
        results.push({
            username: users[i],
            email: `${users[i]}${getRandomEmail()}`,
            thoughts: thoughts[i],
            friends: [getFriends(users[i])]
        })
    }
    return results;
}

// Seed users and email addresses and then seed thoughts 

module.exports = { getUsers, getThoughts };
