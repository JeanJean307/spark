import { IconProps } from '../Types'

export const AirConditioning = ({
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
        '<mask id="mask0_1508_5070" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="16"><path d="M5 5.19995H19V20.2H5V5.19995Z"/></mask><g mask="url(#mask0_1508_5070)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.713 13.6628L12.0105 14.6257L10.3071 13.6628V11.7371L12.0105 10.7743L13.713 11.7371V13.6628ZM14.4425 11.7186L15.5535 11.0907L18.5414 11.8743C18.5728 11.8828 18.6049 11.8864 18.6362 11.8864C18.7967 11.8864 18.9441 11.7814 18.9878 11.6221C19.0396 11.4314 18.9244 11.2357 18.7296 11.1843L16.4471 10.5857L18.4925 9.42926C18.6669 9.33069 18.7267 9.11211 18.626 8.9414C18.5246 8.76997 18.3014 8.7114 18.1278 8.81068L16.0525 9.98355L16.6637 7.74853C16.7163 7.55853 16.6003 7.3621 16.4062 7.31139C16.2122 7.26068 16.0116 7.37282 15.9598 7.56353L15.1596 10.4885L14.0617 11.1093L12.3723 10.1543V8.91354L14.5592 6.7721C14.7015 6.63282 14.7015 6.40639 14.5592 6.2671C14.4162 6.12781 14.1857 6.12781 14.0435 6.2671L12.3723 7.90354V5.5571C12.3723 5.35924 12.2089 5.19995 12.0075 5.19995C11.8062 5.19995 11.6428 5.35924 11.6428 5.5571V7.86996L9.97158 6.23353C9.82934 6.09353 9.5981 6.09353 9.45585 6.23353C9.3136 6.37281 9.3136 6.59853 9.45585 6.73853L11.6428 8.87997V10.1571L9.94897 11.115L8.84091 10.4885L8.04068 7.56353C7.98815 7.37282 7.78828 7.25996 7.59351 7.31139C7.39947 7.3621 7.28349 7.55853 7.33601 7.74853L7.9473 9.98355L5.87269 8.81068C5.69835 8.7114 5.47513 8.76997 5.37446 8.9414C5.27379 9.11211 5.33361 9.33069 5.50795 9.42926L7.55339 10.5857L5.27015 11.1843C5.07611 11.2357 4.96012 11.4314 5.01264 11.6221C5.05568 11.7814 5.20304 11.8864 5.36425 11.8864C5.39562 11.8864 5.42771 11.8828 5.45908 11.8743L8.44699 11.0907L9.57767 11.73V13.6443L8.46085 14.2757L5.4744 13.4921C5.28036 13.4414 5.07975 13.5543 5.02723 13.7443C4.97544 13.935 5.0907 14.1307 5.28547 14.1821L7.56798 14.7807L5.49264 15.9536C5.31829 16.0521 5.25848 16.2707 5.35914 16.4414C5.42698 16.5564 5.54953 16.62 5.67573 16.62C5.73774 16.62 5.80047 16.605 5.85737 16.5721L7.90281 15.4164L7.29078 17.6507C7.23899 17.8414 7.35424 18.0379 7.54901 18.0886C7.58038 18.0972 7.61248 18.1007 7.64384 18.1007C7.80433 18.1007 7.95168 17.9957 7.99545 17.8357L8.79568 14.9114L9.92636 14.2721L11.6428 15.2429V16.52L9.45585 18.6614C9.3136 18.8007 9.3136 19.0272 9.45585 19.1664C9.52734 19.2364 9.62071 19.2714 9.71408 19.2714C9.80745 19.2714 9.9001 19.2364 9.97158 19.1664L11.6428 17.5307V19.8429C11.6428 20.04 11.8062 20.2 12.0075 20.2C12.2089 20.2 12.3723 20.04 12.3723 19.8429V17.4972L14.0435 19.1329C14.1857 19.2729 14.4162 19.2729 14.5592 19.1329C14.7015 18.9936 14.7015 18.7672 14.5592 18.6279L12.3723 16.4871V15.2457L14.0836 14.2779L15.2041 14.9114L16.0043 17.8357C16.0481 17.9957 16.1954 18.1007 16.3566 18.1007C16.388 18.1007 16.4194 18.0972 16.4507 18.0886C16.6455 18.0379 16.7608 17.8414 16.709 17.6507L16.0977 15.4164L18.1424 16.5721C18.2 16.605 18.2627 16.62 18.3248 16.62C18.451 16.62 18.5735 16.5564 18.6406 16.4414C18.742 16.2707 18.6822 16.0521 18.5071 15.9536L16.4325 14.7807L18.715 14.1821C18.9098 14.1307 19.025 13.935 18.9725 13.7443C18.9207 13.5536 18.7209 13.4407 18.5261 13.4921L15.5389 14.2757L14.4425 13.6557V11.7186Z"/></g>',
    }}
  />
)

export const tags = ['air-conditioning', 'criteria', 'holidays']