
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DocumentOutline = () => {
  const outline = [
    {
      title: "封面和目录",
      type: "header",
      expanded: true,
    },
    {
      title: "1. 商务部分",
      type: "section",
      expanded: true,
      items: [
        { title: "1.1 公司简介", type: "subsection" },
        { title: "1.2 资质证明", type: "subsection" },
        { title: "1.3 业绩证明", type: "subsection" },
        { title: "1.4 商务偏离表", type: "subsection" },
      ]
    },
    {
      title: "2. 技术部分",
      type: "section",
      expanded: true,
      items: [
        { title: "2.1 需求理解", type: "subsection" },
        { title: "2.2 总体方案", type: "subsection" },
        { title: "2.3 技术架构", type: "subsection" },
        { title: "2.4 实施计划", type: "subsection" },
        { title: "2.5 技术偏离表", type: "subsection" },
      ]
    },
    {
      title: "3. 报价部分",
      type: "section",
      expanded: false,
      items: [
        { title: "3.1 报价表", type: "subsection" },
        { title: "3.2 分项报价明细", type: "subsection" },
      ]
    },
    {
      title: "4. 附件",
      type: "section",
      expanded: false,
      items: [
        { title: "4.1 授权委托书", type: "subsection" },
        { title: "4.2 联合投标协议", type: "subsection" },
        { title: "4.3 其他材料", type: "subsection" },
      ]
    },
  ];

  return (
    <div className="text-sm">
      <ul className="space-y-0.5">
        {outline.map((item, index) => (
          <li key={index}>
            <div className={cn(
              "flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer",
              item.type === "header" ? "font-semibold" : ""
            )}>
              {item.items && (
                <ChevronRight className={cn(
                  "h-4 w-4 mr-1 transition-transform",
                  item.expanded ? "rotate-90" : ""
                )} />
              )}
              <span>{item.title}</span>
            </div>
            
            {item.items && item.expanded && (
              <ul className="pl-6 space-y-0.5 mt-0.5">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 cursor-pointer">
                      <span>{subItem.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentOutline;
