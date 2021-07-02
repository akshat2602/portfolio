import Dataorc from '../../Assets/dataorc.png';
import Bitglaze from '../../Assets/Bitglaze.png';
import FOSSEE from '../../Assets/FOSSEE.png';

export const work = [
    {
        href: 'https://github.com/frg-fossee/eSim-Cloud',
        title: 'FOSSEE Summer Internship(April 2021- Present)',
        logo: FOSSEE,
        description: 'Worked on extending the functionality of eSim on Cloud, an Online Circuit Simulator.',
        content: 'Added LTI support for existing platform which makes it easier for teachers to assess circuits using LMS such as OpenEdx or Moodle. Also worked on giving user the option to compare the simulations which they have ran on a circuit or through the in build NgSpice Simulator. Worked on fixing the grpah generation code which was bugged out and would not give accurate graphs.',
    },
    {
        href: 'https://dataorc.in',
        title: 'DataOrc (April 2021-Present)',
        logo: Dataorc,
        description: 'Worked as a Software Engineering Intern to help extend existing projects.',
        // content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        href: 'https://www.linkedin.com/company/bitglaze-technologies-pvt-ltd/about/',
        title: 'BitGlaze Technologies Pvt. Ltd. (April 2021-Present)',
        logo: Bitglaze,
        description: 'Worked as a Full Stack Intern to help build platforms for the company.',
        content: 'I was responsible for creating the backend of a resort website in Django - Rest - Framework. Created a face detection model using Tensorflow\'s object detection API using WIDER- Face Dataset.After testing various pre trained models available in the Tensorflow 2 Zoo of models, we decided to go with Mobilenet so that we could infer with the model with minimum time complexity. ',
    },
];
