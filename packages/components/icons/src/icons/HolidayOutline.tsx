import { IconProps } from '../Types'

export const HolidayOutline = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M20.5052 21.7448L13.719 14.964L14.9746 13.7095L21.7608 20.4902C21.9203 20.6495 22 20.8586 22 21.1175C22 21.3764 21.9203 21.5855 21.7608 21.7448C21.5815 21.924 21.3722 22.0088 21.133 21.9993C20.8939 21.9889 20.6846 21.9041 20.5052 21.7448ZM3.67414 19.5044C3.11609 18.5685 2.69756 17.5927 2.41854 16.5771C2.13951 15.5615 2 14.5259 2 13.4705C2 11.9968 2.27902 10.5579 2.83707 9.15352C3.39512 7.74998 4.23219 6.49062 5.34828 5.37543C6.4843 4.24033 7.75984 3.39398 9.17489 2.83639C10.5899 2.2788 12.0249 2 13.4798 2C14.5561 2 15.5976 2.1394 16.6045 2.41819C17.6106 2.69699 18.572 3.11519 19.4888 3.67278C19.987 3.97149 20.2561 4.40442 20.296 4.97157C20.3358 5.53952 20.1365 6.04255 19.6981 6.48066L6.4843 19.6837C6.04584 20.1218 5.5428 20.3209 4.97519 20.2811C4.40678 20.2413 3.97309 19.9824 3.67414 19.5044ZM5.16891 18.459L7.05232 16.5771C6.73343 16.139 6.42451 15.6857 6.12556 15.2173C5.82661 14.7498 5.55755 14.267 5.31839 13.7692C5.07922 13.2713 4.87992 12.7536 4.72048 12.2159C4.56104 11.6782 4.44145 11.1306 4.36173 10.573C3.88341 11.8873 3.71918 13.2315 3.86906 14.6056C4.01814 15.9797 4.45142 17.2641 5.16891 18.459ZM8.36771 15.2926L15.3034 8.30279C14.4464 7.64563 13.5795 7.12269 12.7025 6.73397C11.8256 6.34604 10.9985 6.08238 10.2212 5.94298C9.44395 5.80358 8.7416 5.79362 8.1142 5.91311C7.486 6.03259 7.00249 6.2616 6.66368 6.60014C6.30493 6.9586 6.07095 7.45167 5.96173 8.07936C5.85172 8.70625 5.86129 9.40802 5.99043 10.1847C6.12038 10.9613 6.38465 11.7878 6.78326 12.664C7.18186 13.5402 7.71001 14.4164 8.36771 15.2926ZM18.5321 5.16633C17.2965 4.42951 15.991 3.9914 14.6158 3.85201C13.2407 3.71261 11.8954 3.87192 10.58 4.32994C11.1579 4.4096 11.7112 4.53386 12.2398 4.70273C12.7675 4.8724 13.2857 5.07154 13.7943 5.30015C14.3021 5.52956 14.7853 5.79362 15.2436 6.09234C15.702 6.39105 16.1505 6.70967 16.5889 7.04821L18.5321 5.16633Z"/>',
    }}
  />
)

export const tags = ['holiday-outline', 'account']