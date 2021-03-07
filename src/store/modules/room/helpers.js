import { differenceInMilliseconds, intervalToDuration } from 'date-fns';
import groupBy from 'lodash.groupby';
import flatMap from 'lodash.flatmap';

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

  const groupedByRank = groupBy(studentsWithResponses, (s) => s.correctAnswers);
  const rankedWithTieBraker = flatMap(groupedByRank, (tiedStudents) =>
    tiedStudents.sort((a, b) => b.timeToFinish - a.timeToFinish)
  );

  return rankedWithTieBraker;
};
