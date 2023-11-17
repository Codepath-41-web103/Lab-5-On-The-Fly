import { useCallback, useRef } from "react"
import { Article, Section } from "../semantics/index"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"

const Modal = ({children}) => {
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLArticleElement>(null)
  const navigate = useNavigate();
  const onDismiss = useCallback(() => {
    navigate('/');
  }, [history]);
  const handleClick = useCallback((e) => {
    if((e.target === overlay.current) && onDismiss) {
      onDismiss()
    }
  }, [onDismiss, overlay]);

  return (
    <Section ref={overlay} className="modal" onClick={handleClick}>
        <Button type="button" onClick={onDismiss} className="absolute top-4 right-8">
          <img src={`/close.svg`} width={17} height={17} alt="close"/>
        </Button> 
      <Article ref={wrapper} className="modal_wrapper">
        {children}
      </Article>
    </Section>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Modal