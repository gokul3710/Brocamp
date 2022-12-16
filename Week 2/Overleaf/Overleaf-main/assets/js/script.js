const features = [
    {
        h1: "Collaboration",
        p: "Work together on a single version<br>View collaborator edits in real time",
        iconClass: "fa-solid fa-users fa-4x"
    },
    {
        h1: "Ease of Use",
        p: "No complicated LaTeX installation <br> All the packages and templates you need",
        iconClass: "fa-solid fa-thumbs-up fa-4x",
        right: true,
    },
    {
        h1: "",
        p: `See what has been <span style="background-color: #a8d8f0;">added</span> and <span style="background-color: #e9f5fb; text-decoration: line-through">removed</span> <br> Restore to any older version`,
        iconClass: "fa-sharp fa-solid fa-clock-rotate-left fa-4x",
    },
    {
        h1: "Work from anywhere",
        p: "Access your work from anywhere in the world <br> Work offline and sync your files via Dropbox and GitHub",
        iconClass: "fa-solid fa-earth-americas fa-4x",
        right:true,
    }
]

features.forEach(feature =>{
    const featureDiv = document.createElement("div");
    const featureDivContent = `<i class="${feature.iconClass}"></i>
                                <div class="feature-text">
                                    <h1>${feature.h1}</h1>
                                    <p>${feature.p}</p>
                                </div>
                                `;
    featureDiv.innerHTML = featureDivContent;
    document.querySelector('.features-container').appendChild(featureDiv);
    featureDiv.classList.add("feature");
    if(feature.right){
        featureDiv.classList.add("right");
    }
})

