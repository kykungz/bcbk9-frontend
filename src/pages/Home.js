import React from 'react'
import styled from 'styled-components'

import Content from '../components/Content'

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  max-width: 960px;
  @media (max-width: 650px) {
    width: 90%;
    max-width: initial;
  }
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content title="What is BarCamp?">
          <p>
            BarCamp is an unconference event that assembles people who want to
            share knowledge, thoughts, experiences, or stories to other
            participants. This event has no definite sessions as everyone can
            choose topics they want to participate in.
          </p>

          <p>
            บาร์แคมป์เป็นงานที่จัดขึ้นเพื่อรวมกลุ่มผู้ที่สนใจแบ่งปันความรู้
            ความคิด หรือประสบการณ์ต่าง ๆ และเกิดการแลกเปลี่ยนข้อมูลระหว่างกัน
            งานนี้ไม่มีการกำหนดหัวข้อเอาไว้ล่วงหน้า
            หากแต่ผู้ร่วมงานทุกคนจะเป็นผู้กำหนดเรื่องที่อยากพูดหรืออยากฟังได้เอง
          </p>
        </Content>
        <Content title="Participants">
          <p>Everyone! Partipants like you are the essential of our event.</p>

          <p>
            สำหรับบาร์แคมป์บางเขน ไม่ว่าคุณจะเป็นใคร เรียนที่ไหน หรือทำงานอะไร
            ก็สามารถร่วมแบ่งปันไอเดียหรือเรื่องราวดี ๆ ได้ทั้งนั้น
          </p>
        </Content>
        <Content title="Reasons to Come">
          <p>
            We widely accept any topics for the presentation in sessions,
            without scope and limitation. If you have interesting stories and
            want to forward, talk about or share with others, you will be able
            to present your topic freely. Even if you have no idea about what to
            talk about, you can join other sessions and exchange your ideas as
            well. Our past sessions have many varieties, such as technology,
            food, sport, travel, business, photography and more!
          </p>

          <p>
            งานของเราเปิดกว้างอย่างไร้ขีดจำกัด
            หากคุณมีเรื่องราวน่าสนใจที่อยากบอกต่อ
            คุณก็สามารถนำเสนอหัวข้อได้อย่างอิสระ
            แม้คุณไม่สามารถคิดหัวข้อได้ขณะนั้น
            คุณก็สามารถเลือกฟังหัวข้อของผู้อื่น แล้วเข้าไปร่วมพูดคุยได้เช่นกัน
            และนี่คือเหตุผลที่คุณควรมาบาร์แคมป์
          </p>
        </Content>
      </Container>
    )
  }
}

export default Home
