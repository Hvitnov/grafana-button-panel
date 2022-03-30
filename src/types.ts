import { ButtonVariant } from '@grafana/ui';
import { ButtonSize } from '@grafana/ui';

export interface ButtonOptions {
  text?: string;
  query?: string;
  datasource?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface Options {
  buttons: ButtonOptions[];
  orientation: string;
}
