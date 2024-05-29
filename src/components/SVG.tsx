
interface Props {
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

const ArrowSVG = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} width="75%" height="75%" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M143.455 195.273H117.545V182.318H104.591V169.364H91.6364V156.409H78.6818V143.455H65.7273V117.545H78.6818V104.591H91.6364V91.6364H104.591V78.6818H117.545V65.7273H143.455V91.6364H130.5V104.591H117.545V117.545H195.273V143.455H117.545V156.409H130.5V169.364H143.455V195.273ZM182.318 260.045H78.6818V247.091H52.7727V234.136H39.8182V221.182H26.8636V208.227H13.9091V182.318H0.954529V78.6818H13.9091V52.7727H26.8636V39.8182H39.8182V26.8637H52.7727V13.9091H78.6818V0.954559H182.318V13.9091H208.227V26.8637H221.182V39.8182H234.136V52.7727H247.091V78.6818H260.045V182.318H247.091V208.227H234.136V221.182H221.182V234.136H208.227V247.091H182.318V260.045ZM195.273 208.227H208.227V195.273H221.182V169.364H234.136V91.6364H221.182V65.7273H208.227V52.7727H195.273V39.8182H169.364V26.8637H91.6364V39.8182H65.7273V52.7727H52.7727V65.7273H39.8182V91.6364H26.8636V169.364H39.8182V195.273H52.7727V208.227H65.7273V221.182H91.6364V234.136H169.364V221.182H195.273V208.227Z" fill="#242424" />
    </svg>
  );
}

const HelpSVG = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} width="75%" height="75%" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M181.455 259.136H77.8182V246.182H51.9091V233.227H38.9546V220.273H26V207.318H13.0455V181.409H0.0909119V77.7727H13.0455V51.8636H26V38.9091H38.9546V25.9545H51.9091V13H77.8182V0.0454559H181.455V13H207.364V25.9545H220.318V38.9091H233.273V51.8636H246.227V77.7727H259.182V181.409H246.227V207.318H233.273V220.273H220.318V233.227H207.364V246.182H181.455V259.136ZM194.409 207.318H207.364V194.364H220.318V168.455H233.273V90.7273H220.318V64.8182H207.364V51.8636H194.409V38.9091H168.5V25.9545H90.7727V38.9091H64.8636V51.8636H51.9091V64.8182H38.9546V90.7273H26V168.455H38.9546V194.364H51.9091V207.318H64.8636V220.273H90.7727V233.227H168.5V220.273H194.409V207.318Z" fill="#242424" />
      <path d="M138.75 182.5H112.5V208.75H138.75V182.5Z" fill="#242424" />
      <path d="M173.75 68.75V121.25H165V130H156.25V138.75H138.75V156.25H112.5V130H121.25V121.25H138.75V112.5H147.5V77.5H112.5V86.25H103.75V95H86.25V68.75H95V60H103.75V51.25H156.25V60H165V68.75H173.75Z" fill="#242424" />
    </svg>
  );
}

const WASD = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} width="90%" height="90%" viewBox="0 0 308 291" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M104.16 281.432V258.284H114.348V261.56H117.588V264.8H120.9V274.916H117.588V278.192H114.348V281.432H104.16ZM107.796 277.832H113.988V274.556H117.228V265.16H113.988V261.92H107.796V277.832ZM128.53 281.432V278.192H125.254V261.56H128.53V258.284H138.682V261.56H141.994V278.192H138.682V281.432H128.53ZM128.89 277.832H138.322V261.92H128.89V277.832ZM149.624 281.432V278.192H146.348V258.284H149.984V277.832H152.864V271.28H156.176V261.56H159.776V271.28H163.088V277.832H166.004V258.284H169.604V278.192H166.364V281.432H162.728V278.192H159.416V271.64H156.536V278.192H153.224V281.432H149.624ZM173.945 281.432V258.284H177.581V261.56H180.821V264.8H184.133V274.556H187.013V258.284H190.685V281.432H187.013V278.192H183.773V274.916H180.461V265.16H177.581V281.432H173.945Z" fill="white" />
      <path d="M212.16 281.432V261.56H215.436V258.284H225.588V261.56H228.9V271.64H225.588V274.916H224.004V277.832H227.244V281.432H223.644V278.192H220.332V274.916H215.796V281.432H212.16ZM215.796 271.28H225.228V261.92H215.796V271.28ZM233.254 281.432V277.832H236.53V261.92H233.254V258.284H243.442V261.92H240.13V277.832H243.442V281.432H233.254ZM251.084 281.432V278.192H247.808V261.56H251.084V258.284H261.236V261.56H264.548V268.4H260.876V261.92H251.444V277.832H260.876V274.916H257.636V271.64H254.324V268.076H257.996V271.28H264.548V278.192H261.236V281.432H251.084ZM268.902 281.432V258.284H272.538V268.076H275.418V264.8H279.09V268.076H281.97V258.284H285.642V281.432H281.97V271.64H272.538V281.432H268.902ZM295.422 281.432V261.92H292.542V265.16H288.906V261.56H292.182V258.284H302.334V261.56H305.646V265.16H301.974V261.92H299.094V281.432H295.422Z" fill="white" />
      <path d="M5.436 281.432V278.192H2.16V258.284H5.796V277.832H15.228V274.556H18.9V278.192H15.588V281.432H5.436ZM26.5298 281.432V278.192H23.2538V261.56H26.5298V258.284H36.6818V261.56H39.9938V265.16H36.3218V261.92H26.8898V268.076H33.4418V271.64H26.8898V277.832H36.3218V274.556H39.9938V278.192H36.6818V281.432H26.5298ZM44.3475 281.432V258.284H57.7755V261.56H61.0875V265.16H57.4155V261.92H47.9835V268.076H54.5355V271.64H47.9835V281.432H44.3475ZM71.9573 281.432V261.92H69.0773V265.16H65.4413V261.56H68.7173V258.284H78.8693V261.56H82.1813V265.16H78.5093V261.92H75.6293V281.432H71.9573Z" fill="white" />
      <path d="M132.04 37.48V33.88H128.4V11.76H132.44V33.48H142.92V11.76H147V33.88H143.32V37.48H132.04ZM151.838 37.48V15.4H155.478V11.76H166.758V15.4H170.438V26.6H166.758V30.24H155.878V37.48H151.838ZM155.878 26.2H166.358V15.8H155.878V26.2Z" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(38 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(48 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(38 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(48 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(38 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(48 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(48 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(38 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(48 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(38 210)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(48 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(18 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(28 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(48 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(58 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(68 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(8 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(18 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(28 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(48 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(58 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(68 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(228 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(248 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(248 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(248 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(258 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(248 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(218 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(228 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(238 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(248 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(258 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(268 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(278 220)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(228 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(218 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(238 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(248 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(258 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(268 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(123 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(153 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(113 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(123 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(163 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(153 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(173 170)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(163 160)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(113 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(123 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 180)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(153 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(163 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(173 180)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(113 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(123 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(153 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(163 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(173 190)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(113 200)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(123 200)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(133 200)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(153 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(163 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(173 200)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(113 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(123 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 200)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(153 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(163 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(113 220)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(123 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(133 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(143 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(153 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(163 220)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(173 210)" fill="white" />
      <rect width="10.5" height="10.5" transform="translate(173 220)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(123 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(133 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(143 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(153 230)" fill="#232323" />
      <rect width="10.5" height="10.5" transform="translate(163 230)" fill="#232323" />
      <g clipPath="url(#clip0_202_3300)">
        <rect width="10.5" height="10.5" transform="translate(143 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(143 54)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(143 104)" fill="#232323" />
        <rect width="10.5" height="10.5" transform="translate(143 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(143 64)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(143 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 54)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 54)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(133 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(153 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 54)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 54)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 104)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 64)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 114)" fill="#232323" />
        <rect width="10.5" height="10.5" transform="translate(123 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 64)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 114)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(133 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(133 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(133 114)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(153 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(153 74)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(153 114)" fill="#232323" />
        <rect width="10.5" height="10.5" transform="translate(163 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 64)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 114)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 84)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 64)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 114)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(113 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(123 124)" fill="#232323" />
        <rect width="10.5" height="10.5" transform="translate(133 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(133 124)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(153 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(163 124)" fill="#232323" />
        <rect width="10.5" height="10.5" transform="translate(173 94)" fill="white" />
        <rect width="10.5" height="10.5" transform="translate(173 124)" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_202_3300">
          <rect width="80" height="80" fill="white" transform="translate(113 54)" />
        </clipPath>
      </defs>
    </svg>

  )
}

const ExitSVG = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} fill="#000000" width="60px" height="60px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-checkbox-cross">
      <path d="M13 12H14V13H15V15H13V14H12V13H10V14H9V15H7V13H8V12H9V10H8V9H7V7H9V8H10V9H12V8H13V7H15V9H14V10H13V12M18 19H4V18H3V4H4V3H18V4H19V18H18V19M5 5V17H17V5H5Z" />
    </svg>
  );
}

const GithubSVG = ({ onClick }: Props) => {
  return (
    <svg onClick={onClick} width="75%" height="75%" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 8V14H21V16H20V18H19V19H18V20H17V21H15V22H14V17H13V16H14V15H16V14H17V13H18V8H17V5H15V6H14V7H13V6H9V7H8V6H7V5H5V8H4V13H5V14H6V15H8V17H6V16H5V15H3V16H4V18H5V19H8V22H7V21H5V20H4V19H3V18H2V16H1V14H0V8H1V6H2V4H3V3H4V2H6V1H8V0H14V1H16V2H18V3H19V4H20V6H21V8H22Z" fill="#232323" />
    </svg>
  );
}

export { ArrowSVG, HelpSVG, WASD, ExitSVG, GithubSVG };