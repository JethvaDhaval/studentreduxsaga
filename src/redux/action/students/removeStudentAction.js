import {REMOVE_STUDENT} from '../../../redux/studentActionType';

export const removeStudent = (student) => {
    return {
        type: REMOVE_STUDENT,
        payload: student
    }
}