import Marquee from 'react-fast-marquee';
import { MarqueeItem } from '../MarqueeItem/MarqueeItem';
const NAME_SERVICE_1 = ['НАКЛЕЙКА', 'ЛАЙТБОКС', 'СТЕНД'];
const NAME_SERVICE_2 = ['БАННЕР', 'РОЛЛАП', 'ВЫВЕСКА'];
const NAME_SERVICE_3 = ['ПЛАКАТ', 'НЕОН', 'ИНТЕРЬЕРНАЯ ПЕЧАТЬ'];

export default function MyMarquee() {
  return (
    <div>
      <Marquee direction="right">
        <MarqueeItem value="НАКЛЕЙКА" />
        <MarqueeItem value="ЛАЙТБОКС" />
        <MarqueeItem value="СТЕНД" />
      </Marquee>
      <br />
      <Marquee direction="left">
        <MarqueeItem value="БАННЕР" />
        <MarqueeItem value="РОЛЛАП" />
        <MarqueeItem value="ВЫВЕСКА" />
      </Marquee>
      <br />

      <Marquee direction="right">
        <MarqueeItem value="ПЛАКАТ" />
        <MarqueeItem value="НЕОН" />
        <MarqueeItem value="ИНТЕРЬЕРНАЯ ПЕЧАТЬ" />
      </Marquee>
    </div>
  );
}
