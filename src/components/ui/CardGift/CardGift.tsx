import { FC } from "react";

interface IGift {
    urlGift: string,
    title: string
}

interface IPropsCardGift {
    gift: IGift;
}

export const CardGift: FC<IPropsCardGift> = ({gift}) => {
  return (
    <div>
        <img src={gift.urlGift} />
    </div>
  )
}
