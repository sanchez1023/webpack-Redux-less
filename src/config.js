

export const databaseConfig = ({
    API: 'http://fundoopush-backend-dev.bridgelabz.com/login',
    getcards: "http://fundoopush-backend-dev.bridgelabz.com/redirects",
    addRedirect: 'http://fundoopush-backend-dev.bridgelabz.com/redirects',
    updateRedirect: 'http://fundoopush-backend-dev.bridgelabz.com/redirects',
    backendUrl: 'http://fundoopush-backend-dev.bridgelabz.com/',

    success: 200,
    invalidUser: 400,
    userNotfound: 404

})
export const panelData = [

    {
        Image: "/src/assets/0 (1).png",
        title: 'India is facing a massive skill gap problem with hundreds of engineers...',
        description: "India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing the skills required in the industry now. How can our engineers be trained for future jobs? India is facing a massive skill gap problem with hundreds of engineers graduating every year but only a few possessing .",
        redirect: false,
        link: 'https://brideglabz.com',
        token: 1,
        date: '26 july 2018',
        hashtag: '#bridgelabx#gdgdg#fhfh#hgfjgj#fdhth',

    },
    {
        Image: "/src/assets/Image 2.png",
        title: 'We do this with simply adding the version as a prefix to all URLs.',
        description: "As I write this, I chuckle to myself in seeing a great parallel behind myself referencing Hemingway’s quote from someone else; the sheer notion that I need not labour away at creating a different implementation of the passage with similar functionality for the result value (or in this case, meaning) is a literary testament to code reuse!",
        redirect: true,
        link: 'https://brideglabz.com',
        token: 2,
        date: '26 jan 2019',
        hashtag: '#bridgelabz#new#old'
    },
    {
        Image: "../src/assets/Image 3.png",
        title: 'We are all apprentices in a craft where no one ever becomes a master.',
        description: "Seek to design endpoint paths that avoid unnecessary query string parameters as they are generally harder to read and to work with, when compared to paths whose structure promotes an initial logical filtering and grouping of such items the deeper it goes.",
        redirect: false,
        link: 'https://brideglabz.com',
        token: 3,
        date: '26 feb 2019',
        hashtag: '#bridgelabz#new#old'
    },
    {
        Image: "../src/assets/Image 3.png",
        title: 'We are all apprentices in a craft where no one ever becomes a master.',
        description: "Seek to design endpoint paths that avoid unnecessary query string parameters as they are generally harder to read and to work with, when compared to paths whose structure promotes an initial logical filtering and grouping of such items the deeper it goes.",
        redirect: false,
        link: 'https://brideglabz.com',
        token: 4,
        date: '26 feb 2019',
        hashtag: '#bridgelabz#new#old'
    },
    // {
    //     Image: "../src/assets/Image 3.png",
    //     title: 'We are all apprentices in a craft where no one ever becomes a master.',
    //     description: "Seek to design endpoint paths that avoid unnecessary query string parameters as they are generally harder to read and to work with, when compared to paths whose structure promotes an initial logical filtering and grouping of such items the deeper it goes.",
    //     redirect: false,
    //     link: 'https://brideglabz.com',
    //     token: 5,
    //     date: '26 feb 2019',
    //     hashtag: '#bridgelabz#new#old'
    // },
    // {
    //     Image: "../src/assets/Image 3.png",
    //     title: 'We are all apprentices in a craft where no one ever becomes a master.',
    //     description: "Seek to design endpoint paths that avoid unnecessary query string parameters as they are generally harder to read and to work with, when compared to paths whose structure promotes an initial logical filtering and grouping of such items the deeper it goes.",
    //     redirect: false,
    //     link: 'https://brideglabz.com',
    //     token: 6,
    //     date: '26 feb 2019',
    //     hashtag: '#bridgelabz#new#old'
    // }

]
export const storyPanel = [{
    Image: '../src/assets/Image 1.png',
    title: "Get to know BridgeLabz's office environment.",
    token: 4
}]

export function paneltemplete() {
    status = '';
    message = '';
    token = '';

}