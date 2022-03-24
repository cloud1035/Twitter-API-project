function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindrome("aaabaaa"))
console.log(solution("aaabaaaa"));
var users = {
    user1: {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [{
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [{
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }
}
console.log(window.location.href);

function getParameters() {
    let params = new URLSearchParams(window.location.search)
    return params.get("choice");
}
console.log(getParameters());
const selectedUser = users[getParameters()] || users.user1;

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'M' : Math.sign(num) * Math.abs(num)
}

var center = document.getElementsByClassName("center")[0];
center.innerHTML = `<div class="header">
<h1>${selectedUser.displayName}</h1>
<h2>${kFormatter(selectedUser.tweets.length )} Tweets</h2>
</div>
<div class="cover">
<img src=${selectedUser.coverPhotoURL} width=100%>
</div>
<div class = "profile"> <img class = "profile"
src = ${
    selectedUser.avatarURL
}> <a href = "https://twitter.com/elonmusk"> <button class = "follow"> Follow </button></a> </div>
<h1 class="details">${selectedUser.displayName}</h1>
<h2>${selectedUser.userName}</h2>
<h2>${selectedUser.followingCount} Following ${kFormatter(selectedUser.followerCount)} Followers</h2>
`
selectedUser.tweets.forEach((tweet, i) => {
    center.innerHTML += `<div class="main"><h2 class="tweet">${selectedUser.displayName}
${selectedUser.userName} ${new Date(tweet.timestamp).toLocaleString()}</h2><p>${tweet.text}</p></div>`

})