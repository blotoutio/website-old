import stylesUrl from '../styles/no-signal-loss.css'
import { metaInfo } from '../utils'
import CheckCircle from '../graphics/CheckCircle'
import Section from '~/components/core/Section'

import { tag, data } from '@blotoutio/edgetag-sdk-js'
import { useState } from 'react'
import Select from 'react-select'
import freeEmailDomains from 'free-email-domains'

export function meta() {
  return metaInfo('No signal loss')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

const selectStyle = {
  control: (provided) => ({
    ...provided,
    minHeight: '46px',
    borderColor: '#ccc',
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    color: '#394d66', // neutral80
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
}

const monthlyAdSpendOptions = [
  {
    label: '< $1,000',
    value: '< $1,000',
  },
  {
    label: '$1,000 - $5,000',
    value: '$1,000 - $5,000',
  },
  {
    label: '$5,000 - $10,000',
    value: '$5,000 - $10,000',
  },
  {
    label: '$10,000 - $25,000',
    value: '$10,000 - $25,000',
  },
  {
    label: '$25,000 - $50,000',
    value: '$25,000 - $50,000',
  },
  {
    label: '> $50,000',
    value: '> $50,000',
  },
]

export default function CampaignForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    monthlyAdSpend: null,
    notValid: {
      name: '',
      email: '',
      phone: '',
      company: '',
      monthlyAdSpend: '',
    },
  })

  const isValid = () => {
    let valid = true
    const notValid = {
      name: '',
      email: '',
      phone: '',
      company: '',
      monthlyAdSpend: '',
    }

    if (!form.name) {
      valid = false
      notValid.name = 'Enter a valid name'
    }

    if (!form.email) {
      valid = false
      notValid.email = 'Enter a valid work email'
    } else {
      const domain = form.email.substring(form.email.lastIndexOf('@') + 1)
      if (freeEmailDomains.includes(domain)) {
        valid = false
        notValid.email = 'Please enter a work email'
      }
    }

    if (
      form.phone &&
      form.phone.length > 0 &&
      !form.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    ) {
      valid = false
      notValid.phone = 'Please enter a valid phone number'
    }

    if (!form.company) {
      valid = false
      notValid.company = 'Enter a valid company name'
    }

    if (!form.monthlyAdSpend) {
      valid = false
      notValid.monthlyAdSpend = 'Please select a Monthly ad spend'
    }

    setForm({ ...form, notValid })
    return valid
  }

  const handleChange = (name) => (e) => {
    let value = e
    if (e.target) {
      value = e.target.value
    }

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid()) {
      return
    }

    data({
      firstName: form.name,
      email: form.email,
      phone: form.phone,
    })
    tag(
      'Campaign form',
      { company: form.company, monthlyAdSpend: form.monthlyAdSpend.value },
      { klaviyo: true }
    )
    setSubmitted(true)
  }

  const getForm = () => {
    if (submitted) {
      return (
        <div className='icon-wrapper'>
          <CheckCircle height='90' width='90' />
          <p className='thanks'>Thanks!</p>
        </div>
      )
    }

    return (
      <>
        <h2>Get in touch</h2>
        <form className='campaign-form'>
          <div className='field-wrapper'>
            <label htmlFor='name'>
              Name
              <span>*</span>
            </label>
            <input
              id='name'
              type='text'
              className={form.notValid.name && 'input-error'}
              onChange={handleChange('name')}
              value={form.name}
            />
            {!!form.notValid.name && (
              <div className='helper-text'>{form.notValid.name}</div>
            )}
          </div>
          <div className='field-wrapper'>
            <label htmlFor='email'>
              Work email
              <span>*</span>
            </label>
            <input
              id='email'
              type='email'
              className={form.notValid.email && 'input-error'}
              onChange={handleChange('email')}
              value={form.email}
            />
            {!!form.notValid.email && (
              <div className='helper-text'>{form.notValid.email}</div>
            )}
          </div>
          <div className='field-wrapper'>
            <label htmlFor='phone'>Phone</label>
            <input
              id='phone'
              type='tel'
              className={form.notValid.phone && 'input-error'}
              onChange={handleChange('phone')}
              value={form.phone}
            />
            {!!form.notValid.phone && (
              <div className='helper-text'>{form.notValid.phone}</div>
            )}
          </div>
          <div className='field-wrapper'>
            <label htmlFor='company'>
              Company
              <span>*</span>
            </label>
            <input
              id='company'
              type='text'
              className={form.notValid.company && 'input-error'}
              onChange={handleChange('company')}
              value={form.company}
            />
            {!!form.notValid.company && (
              <div className='helper-text'>{form.notValid.company}</div>
            )}
          </div>
          <div className='field-wrapper'>
            <label htmlFor='monthly-ad-spend'>
              Monthly ad spend
              <span>*</span>
            </label>
            <div className='select'>
              <Select
                id='monthly-ad-spend'
                styles={selectStyle}
                classNamePrefix='regular'
                className={form.notValid.monthlyAdSpend && 'select-error'}
                menuPlacement='auto'
                options={monthlyAdSpendOptions}
                onChange={handleChange('monthlyAdSpend')}
                value={form.monthlyAdSpend}
              />
              {!!form.notValid.monthlyAdSpend && (
                <div className='helper-text'>
                  {form.notValid.monthlyAdSpend}
                </div>
              )}
            </div>
          </div>
          <button>Submit</button>
        </form>
      </>
    )
  }

  return (
    <>
      <Section id='campaign-section'>
        <div className='campaign-introduction'>
          <h1>
            Ready to <span>stop signal loss</span> and restore customer
            identity?
          </h1>
        </div>
        <div className='campaign-box' onSubmit={handleSubmit}>
          {getForm()}
        </div>
      </Section>
    </>
  )
}
