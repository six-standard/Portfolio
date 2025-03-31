import React from "react";

import { Layout, Contacts, Project, Section, Skillset, List } from "../components";
import { Email, Github, Linkedin, Velog, Repo, Sample, VelogDashboard } from "../images";
import { StaticImage } from "gatsby-plugin-image";
import { TwoWayLayout } from "../components/TwoWayLayout";

const IndexPage = () => {
  return (
    <Layout className="my-[105px] print:my-[50px] w-[900px] flex flex-col gap-10">
      <Section>
        <h1 className="H1 leading-none">육기준</h1>
        <div className="flex flex-col gap-5">
          <h2 className="H2">
            사람들의 <span className="text-[#448F5E]">불편함</span>을 해결하기 위해 노력하는 FE
            엔지니어입니다.
          </h2>
          <p className="SPAN font-normal leading-7">
            사용자의 불편함을 해결하는 것을 핵심 가치로 두고 있습니다. <br />
            더 나은 경험을 제공하기 위해 끊임없이 고민하고 개선합니다.
            <br />
            <br />
            새로운 기술과 피드백을 열린 자세로 받아들이며, 지속적인 학습을 통해 시야를 넓힙니다.{" "}
            <br />
            또한 다른 사람들과 함께 지식을 공유하고 받아들이는 것을 선호합니다.
            <br />
            <br />
            이러한 노력과 꾸준함이 저와 동료들의 성장에 도움이 될 수 있다고 믿습니다.
          </p>
        </div>
        <Contacts
          contents={[
            { icon: <Email />, href: "mailto:dbrrl1127@gmail.com", content: "dbrrl1127@gmail.com" },
            { icon: <Github />, content: "https://www.github.com/six-standard" },
            { icon: <Velog />, content: "https://velog.io/@six-standard" },
            { icon: <Linkedin />, content: "https://www.linkedin.com/in/기준-육/" },
          ]}
        />
      </Section>
      <Section title="프로젝트">
        <Project
          icon={<Repo className="w-[30px] h-[30px]" />}
          name="REPO"
          date="2024. 06 ~ 2025. 01"
          banner={
            <StaticImage
              src="../images/RepoBanner.png"
              alt="배너 이미지"
              className="w-[657px] h-[350px]"
            />
          }
          links={[
            { icon: <Github />, name: "Github →", href: "https://github.com/DSM-Repo/repo" },
            {
              icon: <Sample />,
              name: "Sample →",
              href: "https://www.dsm-repo.com/resume_viewer/66dc46c0fcaf9157ccc2e3ff",
            },
            {
              icon: <Repo className="w-[17px] h-[17px]" />,
              name: "Service →",
              href: "https://www.dsm-repo.com/",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="SPAN leading-7">
                  대덕소프트마이스터고등학교 학생을 위한 이력서 관리 플랫폼입니다.
                  <br />
                  학생들을 위한 간단한 이력서 작성 기능, 선생님들을 위한 피드백 및 자동 변환 기능을
                  제공하며, 변환된 레주메북은 온라인 뷰어를 통해 기업들에게 제공됩니다. <br />
                  작성 기간동안{" "}
                  <b>
                    <ins>120+</ins>
                  </b>
                  명의 학생들의 이력서를 관리하였습니다.
                </p>
              ),
            },
            {
              title: "기술 스택",
              content: (
                <List
                  contents={[
                    "**React** - 컴포넌트 기반 아키텍처로 유지보수성과 재사용성을 높이기 위해 선택",
                    "**Yarn Workspace** - 설정 파일 및 디자인 시스템의 손쉬운 관리를 위해 선택",
                    "**React Hook Form** - 입력 렌더링 최적화 및 유지보수의 용이성을 위해 선택",
                    "**Tanstack-Query & Axios** - 낙관적 업데이트, 콜백 관리 등을 위해 선택",
                    "**React-PDF & jsPDF** - 간편한 PDF 렌더링 및 다운로드 기능을 위해 선택",
                  ]}
                />
              ),
            },
            {
              title: "기여",
              content: (
                <List
                  contents={[
                    "작성, 미리보기를 포함한 학생 서비스 개발",
                    "React-hook-form 라이브러리 도입",
                    [
                      "useState 기반으로 Props Drilling이 발생하던 입력 코드 리팩토링",
                      "Zod 라이브러리를 위한 패턴 처리 중앙화",
                    ],
                    "Yarn Workspaces 기반 모노레포 설계 및 구현",
                  ]}
                />
              ),
            },
            {
              title: "트러블슈팅",
              breakAble: false,
              content: (
                <>
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">낙관적 업데이트를 통한 사용자 경험 향상</h3>
                    <List
                      contents={[
                        "**원인**: 네트워크가 느려지거나 서버 부하로 인해 응답 시간이 길어질 경우, 사용자가 해당 글의 업데이트 반영을 늦게 확인하게 되는 불편함 발생",
                        "**해결 방법**: Tanstack-Query 라이브러리를 통해 낙관적 업데이트를 구현하여, 응답이 아직 오지 않은 상황에서도 업데이트를 빠르게 반영할 수 있게 개선",
                        "**배운 점**: 낙관적 업데이트의 원리 및 동작 방식을 배웠으며, Tanstack-Query의 데이터 관리 방식을 고도화할 수 있었음",
                      ]}
                    />
                  </div>
                  <hr className="border-gray-300 my-2" />
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">미리보기 PDF 다운로드시 Javascript 동작 멈춤</h3>
                    <List
                      contents={[
                        "**원인**: PDF 노드를 canvas를 통해 이미지 형태로 변환하는 html2canvas 라이브러리의 코드가 메인 스레드의 호출 스택을 오래 점유하여 변환하는 동안 쌓인 함수들의 실행이 지연되는 문제 발생",
                        "**해결 방법**: canvas 변환 코드를 별도 스레드에서 동작하는 Web Worker로 옮기고, 메시지를 통해 blob 형태로 변환된 이미지 값을 받는 식으로 수정하여 해결.",
                        "**배운 점**: Web Worker의 개념과 동작 방식, 메인 스레드가 실제로 오래 점유될 경우에 어떤 일이 발생하는지에 대해 배울 수 있었음.",
                      ]}
                    />
                  </div>
                  <hr className="border-gray-300 my-2" />
                  <div className="flex flex-col gap-1">
                    <h3 className="H3">특정 운영체제에서의 PDF 화질 저하</h3>
                    <List
                      contents={[
                        "**원인**: 현재 사용중인 React-PDF의 DPI 값은 72 고정인데, Windows와 Linux에서는 기본 96 DPI를 사용하기 때문에 운영체제의 DPI에 맞추기 위해 PDF가 뭉개져서 표시되는 문제 발생.",
                        "**해결 방법**: PDF Canvas의 Scale 값을 3으로 고정한 상황에서, CSS의 Transform Scale 옵션을 통해 크기를 원래대로 돌리면서 내부 픽셀을 압축하여 DPI를 강제로 올리는 방식으로 해결.",
                        "**배운 점**: 운영체제의 화면 표시 방식에 따라 페이지의 내용물이 다를 수 있다는 점과, 픽셀 압축에 대해서 배울 수 있었음.",
                      ]}
                    />
                  </div>
                </>
              ),
            },
          ]}
        />
        <Project
          icon={<VelogDashboard className="w-[30px] h-[30px]" />}
          name="Velog Dashboard"
          smallTitle
          banner={
            <StaticImage
              src="../images/VDBanner.png"
              alt="배너 이미지"
              className="w-[657px] h-[350px]"
            />
          }
          date="2024. 11 ~ ONGOING"
          links={[
            {
              icon: <Github />,
              name: "Github →",
              href: "https://github.com/Check-Data-Out/velog-dashboard-v2-fe",
            },
            {
              icon: <Velog />,
              name: "Logs →",
              href: "https://velog.io/@six-standard/series/Velog-Dashboard-참여기",
            },
            {
              icon: <VelogDashboard className="w-[17px] h-[17px]" />,
              name: "Service →",
              href: "https://velog-dashboard.kro.kr/",
            },
          ]}
          sections={[
            {
              title: "개요",
              content: (
                <p className="leading-7 SPAN">
                  통계 기능이 부실한 Velog를 위한 게시물 통계 대시보드 서비스입니다.
                  <br />
                  간편 통계 조회 기능을 제공하고 있으며, 추후 통계 리더보드와 비교, 타 블로그
                  서비스와의 연동을 준비할 계획입니다.
                  <br />
                  현재{" "}
                  <ins>
                    <b>200+</b>
                  </ins>
                  명의 유저들이 서비스를 사용하고 있으며,{" "}
                  <ins>
                    <b>20000+</b>
                  </ins>
                  개의 게시물의 통계를 관리하고 있습니다.
                  <br />
                  또한, 프로젝트 초기부터 배포까지의{" "}
                  <a
                    href="https://velog.io/@six-standard/series/Velog-Dashboard-참여기"
                    className="hover:underline text-[#9ca3af] font-bold"
                  >
                    회고록
                  </a>
                  을 매주 작성하였습니다.
                </p>
              ),
            },
            {
              title: "기술 스택",
              content: (
                <List
                  contents={[
                    "**NextJS** - SEO 설정의 용이성, SSR을 통한 사용성 강화 등을 위해 선택",
                    "**Google Analytics & Sentry** - 서비스 사용량 모니터링 및 버그의 빠른 탐지를 위해 선택",
                    "**Jest** - 터미널 내부에서 돌아가는 테스트와 NodeJS 백엔드와의 통합이 가능한 테스트라서 선택",
                    "**MSW** - 반복된 Fetch 모킹을 줄이고, 재활용하기 용이한 모킹 API를 만들기 위해 선택",

                    "**Tanstack-Query & Fetch** - Axios보다 커스텀이 쉬우며, NextJS과의 연동을 위해 선택",
                    "**React-ChartJS-2** - 오래된 만큼 거대한 커뮤니티와 안정성의 보장을 위해 선택",
                  ]}
                />
              ),
            },
            {
              title: "기여",
              content: (
                <List
                  contents={[
                    "React 기반 확장 프로그램 개발",
                    "채널톡 도입",
                    [
                      "사용자의 제보를 통한 빠른 버그, 배포 주기 문제 수집",
                      "다른 사용자가 경험하기 전 문제 해결 가능",
                    ],
                    "Sentry 및 Google Analytics 도입",
                    [
                      "사용자의 제보를 통한 빠른 버그, 배포 주기 문제 수집",
                      "다른 사용자가 경험하기 전 문제 해결 가능",
                    ],
                  ]}
                />
              ),
            },
            {
              title: "트러블슈팅",
              content: (
                <div className="flex flex-col gap-1">
                  <h3 className="H3">
                    계정 변경 시, 새로고침하면 사라지는 이전 계정의 데이터 표시
                  </h3>
                  <List
                    contents={[
                      "**원인**: NextJS의 Full-Route Cache 외에도 클라이언트에서 동작하는 RSC Router Cache가 있는데, 해당 캐시를 제거하지 않아 새로고침시 사라지는 이전 데이터가 표시됨",
                      "**해결 방법**: NextJS의 서버 액션을 통해 revalidatePath 실행 후, redirect를 통해 로그인페이지로 이동시켜 해결",
                      "**배운 점**: NextJS의 캐시 구조에 대해 배울 수 있었으며, 공식 문서를 더 세세하게 읽어보는 계기가 되었음",
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
      </Section>
      <Section title="활동 및 자격">
        <div className="flex flex-col gap-8">
          <h3 className="H3">활동</h3>
          <TwoWayLayout title="1일1코테" date="2025. 01. 12 ~ ONGOING">
            <p className="w-full inline-block SPAN">
              코딩테스트 준비 목적과 함께 꾸준함을 만들기 위해, 매일 “백준 온라인 저지” 서비스에서
              코딩테스트를 진행하고 있습니다.
              <br />
              <a
                href="https://solved.ac/profile/dbrrlwns_2"
                className="hover:underline text-[#9ca3af] font-bold"
              >
                1월부터 꾸준히 진행
              </a>
              하고 있으며, 새로운 자료구조나 알고리즘을 학습하면{" "}
              <a
                href="https://github.com/six-standard/Study/tree/main/Engineer%20Brain/CS/Algorithm"
                className="hover:underline text-[#9ca3af] font-bold"
              >
                TIL에 정리
              </a>
              하였습니다.
            </p>
          </TwoWayLayout>
          <TwoWayLayout
            title="대덕SW마이스터고 교내 해커톤"
            date="2024. 07. 18 ~ 2024. 07. 20"
            tabs={[{ name: "우수상(3위)" }]}
          >
            <p className="SPAN w-full inline-block">
              정치에 무관심하거나, 정보가 부족한 사람들을 위한 정치 SNS 플랫폼인 YEOYA(여야)
              서비스를 제작하였습니다.
              <br /> 디자인과 프론트엔드 개발에 일부 참여하였으며,{" "}
              <ins>
                <b>우수상(3위)</b>
              </ins>{" "}
              를 수상했습니다.
            </p>
          </TwoWayLayout>
          <TwoWayLayout
            title="Xquare 확장 프로그램 제작"
            date="2023. 09. 28 ~ 2024. 03. 12"
            tabs={[
              {
                icon: <Github />,
                name: "Github →",
                action: "https://github.com/five-standard/Xquare-Extension",
              },
              {
                icon: (
                  <StaticImage
                    src="../images/Xquare.png"
                    alt="아이콘 이미지"
                    className="w-[18px] h-[18px]"
                  />
                ),
                name: "Service →",
                action:
                  "https://chromewebstore.google.com/detail/xquare/apjpfknndginnahobenblkdfbibckcom?hl=ko",
              },
            ]}
          >
            <p className="SPAN w-full inline-block">
              <b>(구)</b> 교내 학교생활 관리 서비스인 Xquare를 윈도우 환경에서 사용할 방법이 없어
              직접 확장 프로그램을 개발하였습니다. 실제로 처음 불편함을 해결한 경험이며, 이 때부터
              프론트엔드 엔지니어링에 집중하게 되었습니다.
              <br />
              <br />
              현재는 서비스 종료되어 사용할 수 없으나,{" "}
              <ins>
                <b>20+</b>
              </ins>
              명의 교내 사용자를 확보하였습니다.
            </p>
          </TwoWayLayout>
          <h3 className="H3">자격</h3>
          <TwoWayLayout title="TOEIC 810점" date="2023. 08. 11" tabs={[{ name: "한국토익위원회" }]}>
            <p className="SPAN w-full inline-block">
              외국인과 일상 수준의 대화가 가능하며, 영어 문서를 이해하거나 수정할 수 있습니다.
            </p>
          </TwoWayLayout>
          <TwoWayLayout
            title="PCCE 748점 (LV. 2)"
            date="2024. 01. 05"
            tabs={[{ name: "프로그래머스" }]}
          >
            <p className="SPAN w-full inline-block">
              기초적인 알고리즘 및 자료구조 지식을 알고 있으며, 문제에 응용하여 적용할 수 있습니다.
            </p>
          </TwoWayLayout>
          <TwoWayLayout
            title="정보처리기능사"
            date="2023. 11. 19"
            tabs={[{ name: "한국산업인력공단" }]}
          >
            <p className="SPAN w-full inline-block">
              기본적인 컴퓨터 지식을 이해하고 있으며, 산업기능요원 신청시 활용할 수 있습니다.
            </p>
          </TwoWayLayout>
        </div>
      </Section>
      <Section title="기술 스택">
        <Skillset
          title="🟦 Typescript"
          contents={[
            "Mapped Type, Utility Type, Generic과 같은 특수 타입을 이해하고 있으며, 응용할 수 있습니다",
            [
              "Generic을 사용하여 확장성이 높은 API 쿼리 함수를 만들어 본 경험이 있습니다",
              "Utility Type을 이용하여 인터패이스의 제활용성을 높인 경험이 있습니다.",
            ],
            "여러 라이브러리와의 통합에 대해 이해하고 있습니다.",
            [
              "Zod를 통한 타입 추론 경험이 있습니다.",
              "Axios 및 Tanstack-Query에서 Typescript를 통한 서버 데이터 관리 경험이 있습니다.",
            ],
          ]}
        />
        <Skillset
          title="🖥️ ReactJS"
          contents={[
            "Zustand와 Context API를 통한 전역 상태관리를 사용할 수 있습니다.",
            "Axios, Tanstack-Query를 통해 Rest 규칙을 준수하며 API를 사용해 본 경험이 있습니다.",
            "React-Hook-Form, Zod를 통해 안정적인 유효성 검증 시스템을 구현해본 경험이 있습니다.",
          ]}
        />
        <Skillset
          title="💻 NextJS"
          contents={[
            "Hydration 및 Tanstack-query를 통해 Prefetch를 제공하는 SSR 환경을 구축해 본 경험이 있습니다.",
            ["NextJS의 Fetch Caching 및 Tanstack-Query의 관계에 대해 이해하고 있습니다."],
            "Middleware, Page/App router, Full-Stack API 등 NextJS 고유의 기능들을 이해하고 있습니다.",
            [
              "NextJS의 Router에 적용되는 캐시 정책을 이해하며, 응용해 본 경험이 있습니다",
              "리디렉션 CORS 문제 해결을 위해 커스텀 서버를 제작해 본 경험이 있습니다",
            ],
          ]}
        />
        <Skillset
          title="🐙 Git & GitHub"
          contents={[
            "Branch, Merge, Rebase 등의 Git 개념을 이해하고 있습니다.",
            "Pull Request를 통해 코드 리뷰를 받고, 진행해 본 경험이 있습니다. ![실제 경험 →](https://github.com/Check-Data-Out/velog-dashboard-v2-fe/pull/25)",
            "Git Flow와 GIthub Flow의 차이점과 사용 방법을 이해하고 있습니다. ![학습 블로그 →](https://velog.io/@six-standard/브랜치-구조-깔끔하게-관리하기-플로우)",
          ]}
        />
        <Skillset
          title="🍿 Other Stacks"
          contents={[
            "**MonoRepo**",
            [
              "모노레포와 멀티레포의 차이점을 이해하고 있습니다.",
              "Yarn Workspaces 기반 모노레포 형태의 개발 및 유지보수 경험이 있습니다.",
            ],
          ]}
        />
      </Section>
    </Layout>
  );
};

export const Head = () => <title>육기준</title>;

export default IndexPage;
