const LinksSocialMedia = {
    github = 'lucaskeiti',
    youtube = 'lucaskeiti',
    facebook = 'lucaskeiti',
    instagram = 'LuucasKeiti',
    twitter = 'lucaskeiti'
}
    function changeSocialMediaLinks() {
      for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      }
    }

    changeSocialMediaLinks()