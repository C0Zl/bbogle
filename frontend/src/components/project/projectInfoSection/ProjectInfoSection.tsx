import style from './ProjectInfoSection.module.css';

import DefaultProfile from '../../../assets/image/icon/DefaultProfile.svg';

import { useState, useRef } from 'react';
import useProjectStore from '../../../store/useProjectStore';

interface Props {
  titleError: boolean;
  handleTitleError: (value: boolean) => void;
}

function ProjectInfoSection({ titleError, handleTitleError }: Props) {
  const [imgSrc, setImgSrc] = useState(DefaultProfile);
  const imgInputRef = useRef<HTMLInputElement>(null);

  const updateProject = useProjectStore((state) => state.updateProjectField);

  const handleImgClick = () => {
    if (imgInputRef.current) {
      imgInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file); // 새 이미지 URL 생성
      setImgSrc(newImageUrl); // 이미지 상태 업데이트
      updateProject('imgSrc', newImageUrl);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    updateProject('title', value);
    if (value !== '') {
      handleTitleError(false);
    }
  };

  const handleSummaryChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    updateProject('summary', value);
  };

  return (
    <div className={style.container}>
      <div className={style.inputLabel}>
        <p className={style.label}>
          <span>대표이미지/프로젝트명 </span>
          <span className={style.essential}>*</span>
        </p>
        <div className={style.titleBox}>
          <img
            className={style.img}
            src={imgSrc}
            alt="로고"
            onClick={handleImgClick}
          />
          <input
            className={style.hiddenInput}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={imgInputRef}
          />
          <input
            className={`${style.titleInput} ${titleError && style.titleError}`}
            type="text"
            onChange={handleTitleChange}
            placeholder="프로젝트 이름을 입력해주세요 ! (20자 이내)"
          />
        </div>
      </div>

      {titleError ? (
        <span className={style.error}>프로젝트 명은 필수 입력값입니다.</span>
      ) : (
        ''
      )}

      <div className={style.inputLabel}>
        <span className={style.label}>프로젝트 개요</span>
        <textarea
          className={style.summary}
          rows={3}
          onChange={handleSummaryChange}
        ></textarea>
      </div>
    </div>
  );
}

export default ProjectInfoSection;
