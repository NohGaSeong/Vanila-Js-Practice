/**
 * 로컬 스토리지에서 데이터를 가져오는 함수
 *
 * @ param {string} key: 데이터의 키
 * @ return {string} 해당 키에 대한 데이터
 */
export function getAnswer(key) {
    return localStorage.getItem(key);
}

/**         
 * 로컬 스토리지에 데이터를 저장하는 함수
 *
 * @ param {string} key: 저장할 데이터의 키
 * @ param {string} value: 저장할 데이터
 */
export function setAnswer(key, value) {
    localStorage.setItem(key,value);
}
