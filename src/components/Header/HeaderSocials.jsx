import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/vivek-jaiswal-6653a8109
" targer='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Vivekjaiswal43348" targer='_blank'><FaGithub /></a>
        <a href="https://dribbble.com/tags/share_profile" targer='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials    