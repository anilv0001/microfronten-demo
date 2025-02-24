import { useSharedContext } from '../MyContext'

// eslint-disable-next-line react/prop-types
const Button = ({ label }) => {
    const {count, increment} = useSharedContext()
    return(
        <div>
            <button
                onClick={increment}
            >
                {label}{count}
            </button>
        </div>
    )
}

export default Button