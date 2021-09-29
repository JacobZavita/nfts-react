import styled from 'styled-components'

const Modal = () => {
  const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const ModalWrapper = styled.div`
    width: 160px;
    height: 250px;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
    background: linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%);    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    animation: gradient-animation 4s ease infinite;
    -webkit-animation: gradient-animation 4s ease infinite;
  `

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    p {
      margin-bottom: 1rem;
    }
    button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
    }
  `

  return (
    <Background>
      <ModalWrapper>
        <ModalContent>
          <img src="https://i.ibb.co/bWNHYm7/miner.gif" height="150" width="150" alt="miner-animation" className="modalImg" />
          <h3 className="modalH3">Mining Your NFT...</h3>
        </ModalContent>
      </ModalWrapper>
    </Background>
  )
}

export default Modal
