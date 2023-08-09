type slide = {
    src : string
}

type SlideParent = {
    title : string,
    base : string[],
    slides : slide[]
}

const slides : SlideParent[] = [
    {
        title : 'Pencil Hoops <br> with <span class="text-my-red">NBA</span> & <span class="text-my-red">ESPN</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/Images/slides/1.jpg"},
            {"src" : "/Images/slides/2.jpg"},
            {"src" : "/Images/slides/3.jpg"},
            {"src" : "/Images/slides/4.jpg"},
            {"src" : "/Images/slides/5.jpg"},
            {"src" : "/Images/slides/6.jpg"},
        ]
    },
    {
        title : 'Horror Vault <br> with <span class="text-my-green">Spotify</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/Images/slides/7.jpg"},
            {"src" : "/Images/slides/8.jpg"},
            {"src" : "/Images/slides/9.jpg"},
            {"src" : "/Images/slides/10.jpg"},
            {"src" : "/Images/slides/11.jpg"},
        ]
    },
    {
        title : 'Crack VR <br> with <span class="text-my-blue">Chelsea FC</span>',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/Images/slides/12.jpg"},
            {"src" : "/Images/slides/13.jpg"},
            {"src" : "/Images/slides/14.jpg"},
            {"src" : "/Images/slides/15.jpg"},
            {"src" : "/Images/slides/16.jpg"},
        ]
    },
    {
        title : 'Crack Headphones',
        base : ['UI/UX Design <br> Interaction Design', 'Concept, Basketball <br> March, 2023'],
        slides : [
            {"src" : "/Images/slides/17.jpg"},
            {"src" : "/Images/slides/18.jpg"},
            {"src" : "/Images/slides/19.jpg"},
            {"src" : "/Images/slides/20.jpg"},
        ]
    },
]


export default slides