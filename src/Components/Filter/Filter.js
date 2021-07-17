import { connect } from "react-redux";
import * as actions from '../../redux/pb-actions';
import * as selectors from '../../redux/pb-selectors';


const Filter = ({value, onChange}) => {

    return (
        <div>
            <h3>Find contact by name</h3>
            <label>
                <input
                    name="search"
                    type="text"
                    value={value}
                    onChange={onChange}
                ></input>
            </label>
        </div>
    )
};



const mapStateToProps = (state) => ({
    value: selectors.getFilter(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: (evt) => dispatch(actions.filterContact(evt.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);