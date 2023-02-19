import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  function openResume(){
    return <iframe src="https://docs.google.com/gview?url=https://github.com/karthikeyannsk/resume/raw/main/Karthikeyan%20NS%20Resume_Final.pdf" title='resume' style={{width:'100%', height:'100%'}} />
    // window.open(resume, '_blank')
  }

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* <iframe src="https://docs.google.com/gview?url=https://github.com/karthikeyannsk/resume/raw/main/Karthikeyan%20NS%20Resume_Final.pdf&embedded=true" title='resume' style={{width:'100%', height:'100%'}} /> */}
        {/* {resume && (
          <button type='button' className='btn btn--outline' onClick={openResume}>resume</button>
          // <a href={resume}>
          //   <span type='button' className='btn btn--outline'>
          //     Resume
          //   </span>
          // </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
