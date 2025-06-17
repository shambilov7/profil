const followBtn = document.querySelector('.follow');
const messageBtn = document.querySelector('.message');
const chatBox = document.querySelector('.chat-box');
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const messages = document.querySelector('.messages');
const storyImage = document.getElementById('storyImage');
const storyModal = document.getElementById('storyModal');


followBtn.addEventListener('click', () => {
  followBtn.classList.toggle('active');
  followBtn.textContent = followBtn.classList.contains('active') ? 'Following' : 'Follow';
});


messageBtn.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});


sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (text !== '') {
    const p = document.createElement('p');
    p.innerHTML = `<strong>Siz:</strong> ${text}`;
    messages.appendChild(p);
    chatInput.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
}


storyImage.addEventListener('click', () => {
  storyModal.classList.remove('hidden');

  
  setTimeout(() => {
    storyModal.classList.add('hidden');

    
    if (!storyImage.classList.contains('viewed')) {
      storyImage.classList.add('viewed');
    }
  }, 2500);
});

// Modalni yopish funksiyasi
window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
};

// Followers elementlar
const followersCount = document.getElementById('followersCount');
const followersModal = document.getElementById('followersModal');
const followersList = document.getElementById('followersList');

// Following elementlar
const followingCount = document.getElementById('followingCount');
const followingModal = document.getElementById('followingModal');
const followingList = document.getElementById('followingList');

// Followers bosilganda
followersCount.addEventListener('click', () => {
  followersModal.classList.remove('hidden');
  followersList.innerHTML = 'Yuklanmoqda...';

  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => {
      followersList.innerHTML = '';
      const total = 5841;

      for (let i = 0; i < total; i++) {
        const user = data.results[i % data.results.length];
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${user.picture.thumbnail}" 
               style="border-radius: 50%; width: 24px; vertical-align: middle; margin-right: 10px;">
          ${user.name.first} ${user.name.last}
        `;
        followersList.appendChild(li);
      }
    });
});

// Following bosilganda
followingCount.addEventListener('click', () => {
  followingModal.classList.remove('hidden');
  followingList.innerHTML = 'Yuklanmoqda...';

  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => {
      followingList.innerHTML = '';
      const total = 421;

      for (let i = 0; i < total; i++) {
        const user = data.results[i % data.results.length];
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${user.picture.thumbnail}" 
               style="border-radius: 50%; width: 24px; vertical-align: middle; margin-right: 10px;">
          ${user.name.first} ${user.name.last}
        `;
        followingList.appendChild(li);
      }
    });
});

