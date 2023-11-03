import React from 'react'
import { Section, Picture } from '../semantics/index'
import './Loading.scss'

const Loading = () => {
  return (
    <Section
      className="loading-container"
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >

      <Picture
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '40px',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30dvh'
        }}
      >
        <img
          src="/images/Chatat.png"
          alt="loading logo"
          style={{
            objectFit: 'contain',
            position: 'absolute',
            width: '250px',
            height: '250px',
            marginInline: 'auto',
            marginBlock: 'auto'
          }}
          loading='eager'
        />
      </Picture>
      <progress
        style={{
          width: '300px',
          marginTop: '15px',
          height: '20px',
          borderRadius: '50px'
        }}
      />
    </Section>
  )
}

export default Loading;
