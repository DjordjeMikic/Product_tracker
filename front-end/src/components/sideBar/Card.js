import { CardContainer, Mail } from './style';

const Card = () => (
    <CardContainer className="flex column">
        <h3>Need more features?</h3>
        <p>Contact us!</p>
        <Mail>
            <a href="mailto:office@brankistudio.com">
                office@brankistudio.com
            </a>
        </Mail>
    </CardContainer>
)

export default Card;