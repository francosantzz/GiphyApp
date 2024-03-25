import { FC } from "react"
import { CardGift } from "../ui/CardGift/CardGift";

interface IGift {
    urlGift: string,
    title: string
  }

interface IPropsGiftList {
gift: IGift[];
}

export const GiftList: FC<IPropsGiftList> = ({gift}) => {
  return (
    <div>
        {
            gift.map((el)=>(<CardGift gift={el}/>))
        }
    </div>
  )
}

