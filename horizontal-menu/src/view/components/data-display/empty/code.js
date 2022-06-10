export const basic = `
import { Empty } from "antd";

return (
  <Empty />
);
`;

export const chooseImage = `
import { Empty } from "antd";

return (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
);
`;

export const noDescription = `
import { Empty } from "antd";

return (
  <Empty description={false} />
}
`;

export const customize = `
import { Empty, Button } from "antd";

import girlandcat from "../../../../assets/images/illustrations/girlandcat.svg";

return (
  <Empty 
    className="hp-my-8"
    image={girlandcat}
    imageStyle={{
      height: 240,
    }}
    description={
      <span className="hp-text-color-dark-30">Select workout plan</span>
    }
  >
    <Button type="primary">Start Now</Button>
  </Empty>
);
`;

export const groups = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-groups.svg";

return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 130,
    }}
    description={false}
  />
);
`;

export const forms = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-forms.svg";

return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 150,
    }}
    description={false}
  />
);
`;

export const sheets = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-sheets.svg";

return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 170,
    }}
    description={false}
  />
);
`;

export const questions = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-questions.svg";

return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 130,
    }}
    description={false}
  />
);
`;

export const search = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-search.svg";


return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 155,
    }}
    description={false}
  />
);
`;

export const search2 = `


import { Empty } from "antd";

import emptyImage from "../../../../assets/images/illustrations/empty-search-2.svg";


return (
  <Empty
    className="hp-my-8"
    image={ emptyImage}
    imageStyle={{
      height: 155,
    }}
    description={false}
  />
);
`;