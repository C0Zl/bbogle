import style from './DiaryCreate.module.css';
import useProjectStore from '../../../store/useProjectStore';
import { useNavigate } from 'react-router-dom';
import QuestionSection from '../questionSection/QuestionSection';

function DiaryCreate() {
  const questionList = [
    {
      question: '어떤 작업을 하셨나요 ?',
      description: '구현한 기능이나 작업물에 대해 설명해주세요.',
      isFileType: false,
    },
    {
      question: '작업 진행 중 힘든 점은 어떤 점이었나요 ?',
      description:
        '구현 중 어려웠던 부분이나 팀원과의 갈등 ... 어떤 것이든 적어보세요 !',
      isFileType: false,
    },
    {
      question: '문제는 해결되었나요 ?',
      description:
        '해결하기 위해 실행한 노력들을 적어보세요 ! 아직 해결되지 않았다면, 고민한 내용을 적어도 좋아요.',
      isFileType: false,
    },
    {
      question: '첨부 이미지 업로드',
      description:
        '관련된 이미지를 최대 3장까지 첨부할 수 있어요 ! (1장 당 최대 5MB)',
      isFileType: true,
    },
  ];

  const navigate = useNavigate();
  const project = useProjectStore((state) => state.project);

  const navPjtDetail = () => {
    navigate(`/project/${project.pjtID}`);
  };

  return (
    <div className={style.container}>
      <div className={style.backBtn} onClick={navPjtDetail}>
        돌아가기
      </div>

      <div className={style.diaryTitle}>오늘의 Runner Way는 어땠나요?</div>

      <section className={style.diaryForm}>
        {questionList.map((question, index) => (
          <QuestionSection
            key={index}
            index={index + 1}
            question={question.question}
            description={question.description}
            isFileType={question.isFileType}
          />
        ))}
      </section>
    </div>
  );
}

export default DiaryCreate;