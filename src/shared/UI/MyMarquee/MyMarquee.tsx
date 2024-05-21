import Marquee from 'react-fast-marquee';
import { MarqueeItem } from '../MarqueeItem/MarqueeItem';

export default function MyMarquee() {
  return (
    <div className="w-[1500px]">
      <Marquee
        direction="right"
        gradient={true}
        gradientColor="white"
        gradientWidth={100}
      >
        <MarqueeItem value="НАКЛЕЙКА" />
        <MarqueeItem value="ЛАЙТБОКС" />
        <MarqueeItem value="СТЕНД" />
        <MarqueeItem value="БАННЕР" />
        <MarqueeItem value="РОЛЛАП" />
        <MarqueeItem value="ВЫВЕСКА" />
        <MarqueeItem value="ПЛАКАТ" />
        <MarqueeItem value="НЕОН" />
        <MarqueeItem value="ИНТЕРЬЕРНАЯ ПЕЧАТЬ" />
      </Marquee>
      <br />
      <Marquee
        direction="left"
        gradient={true}
        gradientColor="white"
        gradientWidth={100}
      >
        <MarqueeItem value="НАКЛЕЙКА" />
        <MarqueeItem value="ЛАЙТБОКС" />
        <MarqueeItem value="СТЕНД" />
        <MarqueeItem value="БАННЕР" />
        <MarqueeItem value="РОЛЛАП" />
        <MarqueeItem value="ВЫВЕСКА" />
        <MarqueeItem value="ПЛАКАТ" />
        <MarqueeItem value="НЕОН" />
        <MarqueeItem value="ИНТЕРЬЕРНАЯ ПЕЧАТЬ" />
      </Marquee>
      <br />

      <Marquee
        direction="right"
        gradient={true}
        gradientColor="white"
        gradientWidth={100}
      >
        <MarqueeItem value="ПЛАКАТ" />
        <MarqueeItem value="НЕОН" />
        <MarqueeItem value="ИНТЕРЬЕРНАЯ ПЕЧАТЬ" />
        <MarqueeItem value="ЛАЙТБОКС" />
        <MarqueeItem value="СТЕНД" />
        <MarqueeItem value="БАННЕР" />
        <MarqueeItem value="РОЛЛАП" />
        <MarqueeItem value="ВЫВЕСКА" />
      </Marquee>
    </div>
  );
}
