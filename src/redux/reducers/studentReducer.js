import {ADD_STUDENT, REMOVE_STUDENT} from '../studentActionType';

const initialState = {
    students: []
}

const studentReducer = (state = initialState, action) => {
switch(action.type){
    case ADD_STUDENT:return {
        students: state.students.concat(action.payload)
    }

    case REMOVE_STUDENT:return {
        students: state.students.filter(student => student !== action.payload)
    }
    default: return state;
}
}

export default studentReducer;