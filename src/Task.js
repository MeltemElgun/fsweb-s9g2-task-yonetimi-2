import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const backgroundColor =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3
      ? true
      : false;

  return (
    <div className="p-6 bg-[#fff] rounded-[5px] leading-normal mt-4 shadow-[0_4px_5px_0_rgba(0,0,0,0.10)]">
      <h3 className="text-[18px] text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-[12px] pt-[4px]">
        son teslim:{" "}
        <span className={backgroundColor ? "bg-[#ffd9d4]" : ""}>
          {formatDistanceToNow(new Date(taskObj.deadline), {
            locale: tr,
            addSuffix: true,
          })}
        </span>
      </div>
      <p className="p-[0.5rem,0,0.75rem] text-[14px] text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block px-3 py-1.5 text-[14px] border-[1px] border-solid border-[#ccc] mr-1 mb-[6px] rounded-[30px] "
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0/0.5)]  rounded-[3px] border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
