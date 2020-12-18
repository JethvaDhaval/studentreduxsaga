import {ADD_STUDENT} from '../../../redux/studentActionType';

export const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: [student]
    }
}