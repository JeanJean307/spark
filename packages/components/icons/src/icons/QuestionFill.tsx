import { IconProps } from '../Types'

export const QuestionFill = ({
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
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.7998C6.47715 2.7998 2 7.27696 2 12.7998C2 18.3227 6.47715 22.7998 12 22.7998C17.5228 22.7998 22 18.3227 22 12.7998C22 7.27696 17.5228 2.7998 12 2.7998ZM12.2101 9.66665C12.0012 9.6251 11.7847 9.64642 11.5879 9.72793C11.3911 9.80944 11.223 9.94747 11.1046 10.1246C10.9863 10.3017 10.9231 10.5099 10.9231 10.7229C10.9231 11.2752 10.4754 11.7229 9.92313 11.7229C9.37084 11.7229 8.92313 11.2752 8.92313 10.7229C8.92313 10.1143 9.10358 9.51943 9.44168 9.01343C9.77978 8.50744 10.2603 8.11306 10.8226 7.88017C11.3848 7.64729 12.0035 7.58636 12.6003 7.70508C13.1972 7.8238 13.7454 8.11685 14.1758 8.54717C14.6061 8.97748 14.8991 9.52574 15.0178 10.1226C15.1366 10.7195 15.0756 11.3381 14.8428 11.9004C14.6099 12.4626 14.2155 12.9432 13.7095 13.2812C13.488 13.4293 13.2494 13.5471 13 13.6328V14.1844C13 14.7367 12.5523 15.1844 12 15.1844C11.4478 15.1844 11 14.7367 11 14.1844V12.7998C11 12.2475 11.4478 11.7998 12 11.7998C12.213 11.7998 12.4213 11.7366 12.5984 11.6183C12.7755 11.5 12.9135 11.3318 12.995 11.135C13.0765 10.9382 13.0978 10.7217 13.0563 10.5128C13.0147 10.3039 12.9122 10.112 12.7615 9.96138C12.6109 9.81077 12.419 9.7082 12.2101 9.66665ZM11.4098 16.4403C11.5845 16.3236 11.7898 16.2613 11.9999 16.2613C12.2804 16.265 12.5485 16.3781 12.7469 16.5765C12.9453 16.7749 13.0583 17.0429 13.062 17.3235C13.062 17.5335 12.9997 17.7389 12.883 17.9135C12.7663 18.0882 12.6004 18.2243 12.4064 18.3047C12.2123 18.3851 11.9987 18.4061 11.7927 18.3652C11.5867 18.3242 11.3974 18.223 11.2489 18.0745C11.1003 17.9259 10.9992 17.7367 10.9582 17.5307C10.9172 17.3246 10.9382 17.1111 11.0186 16.917C11.099 16.7229 11.2352 16.5571 11.4098 16.4403Z"/>',
    }}
  />
)

export const tags = ['question-fill', 'alert']