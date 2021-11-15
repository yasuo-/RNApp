/**
 * bottomHalfModalStateSelector
 * @param {*} state
 * @return isVisibleBottomHalfModal
 */
export const IntroSelector = state => {
  const {intro} = state;
  return intro.finishWalkIntro;
};
