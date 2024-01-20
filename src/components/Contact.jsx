import { useState } from 'react'
import Title from './basic/Title'

export default function Contact() {
  const [active, setActive] = useState(1)
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <Title title={'Contact Us'} />
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
          className='form'
        >
          <h4 className='form-title'>Join the community!</h4>
          <div className='form-intigator'>
            <span className={(active === 1 && 'active') || ''}>1</span>
            <span className={(active === 2 && 'active') || ''}>2</span>
          </div>

          {(active === 1 && (
            <div className='form-filed'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Ex-Harun' id='name' />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' placeholder='example@gmail.com' id='email' />
              </div>
            </div>
          )) || (
            <div className='form-filed'>
              <div className='form-group'>
                <label htmlFor='Message'>Message</label>
                <textarea
                  name=''
                  id='Message'
                  placeholder='Please Describe Your Query'
                ></textarea>
              </div>
            </div>
          )}
          <div className='form-btns'>
            {
              <button
                onClick={() => setActive(1)}
                className={(active === 2 && 'pre active') || 'pre'}
              >
                Previous
              </button>
            }
            <button
              onClick={() => {
                active === 1 && setActive(2)
              }}
            >
              {(active === 1 && 'Next') || 'Send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
