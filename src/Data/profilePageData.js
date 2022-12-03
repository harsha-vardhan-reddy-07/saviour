import kidpic from '../img/kid.jpg'
import userimg from '../img/harsha.jpg'

import petpic from '../img/dog.jpg'
import userimg2 from '../img/user1.jpg'

import userimg3 from '../img/user3.jpg';
import genpic from '../img/generalpic.jpg'

export const postsData = [
    {   
        id: 1,
        username: 'Harsha',
        userpic: userimg,
        postType: 'kid',
        foundOrLost:'found',
        location: 'berlin',
        supports: 256,
        supported: true,
        postImg: kidpic,
        description: 'I found this little girl near the mid wall of berlin. Please reach me if you know her. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.',
        kidName: 'Jane',
        kidAge: '8',
        kidHeight: '96',
        identityMarks: "Fair little girl with a mole on her left cheek Both the margin property and the padding property insert space around an element. However, the difference is that margin inserts",
        petBreed: '',
        petAge: '',
        petColor: '',
        generalLink: ''
    },

    {   
        id: 2,
        username: 'Harsha',
        userpic: userimg,
        postType: 'pet',
        foundOrLost:'lost',
        location: 'mumbai',
        supports: 250,
        supported: false,
        postImg: petpic,
        description: 'I lost my pet Rocky near the old estate building in New york. It gone missing suddenly yesterday.  Please help me to find my pet. stop Propagation prevents further propagation of the current event in the capturing and bubbling phases. preventDefault prevents the default action the browser makes on that event. ',
        kidName: '',
        kidAge: '',
        kidHeight: '',
        identityMarks: "A tag around it's neck with a name Rocky on it. Both the margin property and the padding property insert space around an element. However, the difference is that margin inserts",
        petBreed: 'Golden Retreiver',
        petAge: '2',
        petColor: 'brown',
        generalLink: ''
    },

    {   
        id: 3,
        username: 'Harsha',
        userpic: userimg,
        postType: 'general',
        foundOrLost:'none',
        location: 'hyderabad',
        supports: 989,
        supported: true,
        postImg: genpic,
        description: 'We are hosting a small event for the needy kids at the Evenue park. Akshya Foundation is organizing this event. In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces',
        kidName: '',
        kidAge: '',
        kidHeight: '',
        identityMarks: "",
        petBreed: '',
        petAge: '',
        petColor: '',
        generalLink: 'https://www.youtube.com',
    },
]