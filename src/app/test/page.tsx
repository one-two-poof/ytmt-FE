import { Avatar, Badge, Button, Card, Input, Spinner, Textarea } from "@/components/ui";
import * as s from "./page.css";

export default function TestPage() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <h1 className={s.title}>UI Component Showcase</h1>
        <p className={s.subtitle}>너도나도 디자인 시스템 — 시각적 회귀 테스트용 페이지</p>
      </header>

      {/* ── Button ── */}
      <section className={s.section} data-testid="section-button">
        <h2 className={s.sectionTitle}>Button</h2>

        <div className={s.group}>
          <p className={s.label}>Variant</p>
          <div className={s.row}>
            <Button variant="primary">Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="fab">+ 생각 나누기</Button>
          </div>
        </div>

        <div className={s.group}>
          <p className={s.label}>Size</p>
          <div className={s.row}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className={s.group}>
          <p className={s.label}>Disabled</p>
          <div className={s.row}>
            <Button variant="primary" disabled>Primary Disabled</Button>
            <Button variant="ghost" disabled>Ghost Disabled</Button>
            <Button variant="fab" disabled>FAB Disabled</Button>
          </div>
        </div>

        <div className={s.group}>
          <p className={s.label}>Full Width</p>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── Card ── */}
      <section className={s.section} data-testid="section-card">
        <h2 className={s.sectionTitle}>Card</h2>

        <div className={s.cardGrid}>
          <Card variant="default">
            <div className={s.cardContent}>
              <div className={s.cardMeta}>
                <Avatar name="김민준" size="sm" />
                <span style={{ fontSize: "14px", fontWeight: 600 }}>김민준</span>
                <Badge variant="spark">92% 매칭</Badge>
              </div>
              <p className={s.cardText}>
                요즘 새벽에 혼자 걷는 게 좋아졌어요. 아무 생각 없이 걷다 보면 오히려 많은 것들이 정리되는 느낌이에요.
              </p>
            </div>
          </Card>

          <Card variant="interactive">
            <div className={s.cardContent}>
              <div className={s.cardMeta}>
                <Avatar src="https://i.pravatar.cc/44?img=5" alt="박서연" size="sm" />
                <span style={{ fontSize: "14px", fontWeight: 600 }}>박서연</span>
                <Badge variant="primary">87% 매칭</Badge>
              </div>
              <p className={s.cardText}>
                사람들이 왜 나를 오해하는지 모르겠어요. 그냥 솔직하게 말하는 건데.
              </p>
              <div className={s.row} style={{ marginBottom: 0 }}>
                <Button variant="primary" size="sm">채팅 보내기</Button>
              </div>
            </div>
          </Card>

          <Card variant="flat">
            <div className={s.cardContent}>
              <p className={s.label}>Flat variant</p>
              <p className={s.cardText}>
                glassmorphism 없이 단순한 흰 배경 카드입니다.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── Input ── */}
      <section className={s.section} data-testid="section-input">
        <h2 className={s.sectionTitle}>Input / Textarea</h2>

        <div className={s.inputGrid}>
          <Input label="기본 입력" placeholder="오늘 어떤 생각을 하셨나요?" />

          <Input
            label="에러 상태"
            placeholder="입력해주세요"
            hasError
            errorMessage="하루 최대 3개까지 등록할 수 있어요."
            defaultValue="이미 3개 등록됨"
          />

          <Input label="비활성화" placeholder="비활성화된 입력" disabled />
        </div>

        <div style={{ marginTop: "16px" }}>
          <Textarea
            label="오늘의 생각"
            placeholder="오늘 어떤 생각을 하셨나요? 솔직하게 적어보세요."
            rows={4}
            multiline
          />
        </div>

        <div style={{ marginTop: "16px" }}>
          <Textarea
            label="에러 상태 (Textarea)"
            placeholder="내용을 입력해주세요"
            hasError
            errorMessage="최소 10자 이상 입력해주세요."
            defaultValue="짧은 글"
            rows={3}
            multiline
          />
        </div>
      </section>

      <div className={s.divider} />

      {/* ── Avatar ── */}
      <section className={s.section} data-testid="section-avatar">
        <h2 className={s.sectionTitle}>Avatar</h2>

        <div className={s.group}>
          <p className={s.label}>Size (이니셜)</p>
          <div className={s.row}>
            <Avatar name="김민준" size="sm" />
            <Avatar name="김민준" size="md" />
            <Avatar name="김민준" size="lg" />
            <Avatar name="김민준" size="xl" />
          </div>
        </div>

        <div className={s.group}>
          <p className={s.label}>Size (이미지)</p>
          <div className={s.row}>
            <Avatar src="https://i.pravatar.cc/88?img=3" alt="박서연" size="sm" />
            <Avatar src="https://i.pravatar.cc/88?img=3" alt="박서연" size="md" />
            <Avatar src="https://i.pravatar.cc/88?img=3" alt="박서연" size="lg" />
            <Avatar src="https://i.pravatar.cc/88?img=3" alt="박서연" size="xl" />
          </div>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── Badge ── */}
      <section className={s.section} data-testid="section-badge">
        <h2 className={s.sectionTitle}>Badge</h2>

        <div className={s.row}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="spark">Spark Gold</Badge>
          <Badge variant="surface">Surface</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <div className={s.row}>
          <Badge variant="primary" withDot>온라인</Badge>
          <Badge variant="spark" withDot>92% 매칭</Badge>
          <Badge variant="surface" withDot>3개 등록</Badge>
          <Badge variant="outline" withDot>오늘 가입</Badge>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── Spinner ── */}
      <section className={s.section} data-testid="section-spinner">
        <h2 className={s.sectionTitle}>Spinner</h2>

        <div className={s.group}>
          <p className={s.label}>Size</p>
          <div className={s.row}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
