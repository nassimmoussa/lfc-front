import { differenceInMilliseconds, intervalToDuration } from 'date-fns';

export const rankStudents = (students, roomStartTime, roomFinishTime) => {
  const studentsWithResponses = students
    .map((s) => {
      const correctAnswers = s.responses.filter((response) => response.correct)
        .length;
      const wrongAnswers = s.responses.filter((response) => !response.correct)
        .length;

      const timeToFinish = differenceInMilliseconds(
        roomStartTime,
        s.finishDate ? new Date(s.finishDate) : roomFinishTime
      );

      return {
        ...s,
        correctAnswers,
        wrongAnswers,
        duration: intervalToDuration({ start: 0, end: timeToFinish }),
        timeToFinish,
      };
    })
    .sort((a, b) => b.correctAnswers - a.correctAnswers);

  return studentsWithResponses;
};
