import { useEffect, useRef, useCallback, useState, useMemo } from 'react';

import './styles.css';

function VerificationInput({
  value,
  position,
  handleChange,
  handleFocus,
  handleBlur,
  isError,
  className,
  errorClassName,
}) {
  const MAX_LENGTH = 1;
  const inputRef = useRef();
  const tab = useCallback((e) => {
    return e.data
      ? e.target?.nextSibling?.focus()
      : e.target?.previousSibling?.focus();
  }, []);

  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener('input', tab);

    return () => input.removeEventListener('input', tab);
  }, [tab]);

  return (
    <input
      ref={inputRef}
      className={`${className} ${isError ? errorClassName : ''}`}
      type="text"
      value={value}
      onChange={(e) => handleChange({ index: position, value: e.target.value })}
      onFocus={handleFocus}
      onBlur={handleBlur}
      maxLength={MAX_LENGTH}
      data-testid="verify-input"
    />
  );
}

export function Verification({
  slots = 6,
  handleVerify = () => {},
  errorMessage = 'The field is required',
  isAutomaticVerify = true,
  verifyInputClassName = 'verificationInput',
  verifyInputErrorClassName = 'error',
  verifyErrorMessageClassName = 'errorRow',
  verifyButtonClassName = 'btn btnOutlined',
  verifyButtonText = 'Verify',
}) {
  const pasteRef = useRef();

  const [content, setContent] = useState(Array.from({ length: slots }, () => ''));

  const [isVisited, setIsVisited] = useState(false);

  const handleFocus = useCallback(() => setIsVisited(false), []);
  const handleBlur = useCallback(() => setIsVisited(true), []);

  const handleSplitPaste = useCallback((e) => {
    const copied = e.clipboardData.getData('text/plain');
    const arry = copied.split('');
    setContent((prevState) => prevState.map((value, index) => arry[index] || value));
  }, []);

  const isDisabled = useMemo(() => {
    return content.some((value) => value === '');
  }, [content]);

  const handleSingleChange = useCallback(({ index, value }) => {
    setContent((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  }, []);

  useEffect(() => {
    const pasteContainer = pasteRef.current;
    pasteContainer.addEventListener('paste', handleSplitPaste);

    return () => pasteContainer.removeEventListener('paste', handleSplitPaste);
  }, [pasteRef, handleSplitPaste]);

  useEffect(() => {
    if (!isDisabled && isAutomaticVerify) {
      handleVerify(content);
    }
  }, [isDisabled, content, handleVerify, isAutomaticVerify]);

  return (
    <>
      <div ref={pasteRef}>
        <div>
          {content.map((value, position) => (
            <VerificationInput
              key={position}
              value={value}
              position={position}
              handleChange={handleSingleChange}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              isError={isVisited && isDisabled}
              errorClassName={verifyInputErrorClassName}
              className={verifyInputClassName}
            />
          ))}
        </div>
        <div className={verifyErrorMessageClassName} data-testid="error-row">
          {isVisited && isDisabled ? errorMessage : ''}
        </div>
        {!isAutomaticVerify && (
          <button
            className={verifyButtonClassName}
            onClick={handleVerify}
            disabled={isDisabled}
          >
            {verifyButtonText}
          </button>
        )}
      </div>
    </>
  );
}
