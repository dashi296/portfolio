const EditorData: Record<string, string> = {
  profile: `require "catpix"

  class Person

    attr_accessor :name,
                  :age,
                  :hobbies,
                  :favorites,
                  :skills,
                  :message

    def initialize(name, age)
      @name = name
      @age = age
      @hobbies = []
      @favorites = []
      @skills = []
      @message = ""
    end

    def introduction
      divider = "=" * 50
      text = <<-TEXT
      #{divider}
      #{profile_image}
      NAME      : #{name}
      AGE       : #{age}
      FAVORITES : #{favorites}
      HOBBIES   : #{hobbies}
      MESSAGE   : #{message}

      #{divider}

      TEXT

      puts text
    end

    def grow(years = 1)
      self.age += years
    end

    private
      def profile_image
        Catpix::print_image '/Users/dashi/pictures/profile.png',
          limit_x: 0.5,
          limit_y: 0,
          resolution: "high"
      end
  end

  # HISTORY
  # -1989
  me = Person.new("dashi", 0)

  # -1999
  me.grow(10)
  me.favorites.push("家族")
  me.favorites.push("ラーメン")
  me.favorites.push("焼肉")

  # -2008
  me.grow(9)
  me.hobbies.push("ギター")
  me.hobbies.push("ピアノ")

  # -2017
  me.grow(9)
  me.hobbies.push("ゲーム開発")
  me.favorites.push("プログラミング")

  # -2018
  me.grow
  me.hobbies.push("Webアプリ開発")

  # -2019
  me.grow

  # 自己紹介
  me.introduction

`,
  skills: `
  LANGUAGES = %i[HTML CSS Ruby Javascript Typescript jQuery React C# PHP]
  FRAMEWORKS = %i[Rails Unity CakePHP]

  skills = {
    HTML: 7,
    CSS: 7,
    Ruby: 7,
    Javascript: 6,
    Typescript: 6,
    React: 5,
    jQuery: 4,
    :"C#" => 4,
    PHP: 4,
    Rails: 6,
    Unity: 4,
    CakePHP: 2,
  }

  def skills_info(skills)
    puts "Language   Level(1~10)"
    LANGUAGES.each do |skill|
      puts "#{skill}  : #{"+" * skills[skill]}"
    end

    puts "Framework   Level(1~10)"
    FRAMEWORKS.each do |framework|
      puts "#{framework}  : #{"+" * skills[framework]}"
    end
  end

  skills_info(skills)

  `,
  products: `require "catpix"

  class Product
    attr_accessor :title, :image, :backend, :frontend, :description

    def initialize(title:, image:, backend:, frontend:, description:)
      @title = title
      @image = image
      @backend = backend
      @frontend = frontend
      @description = description
    end

    def display
      text = <<-TEXT
      #{print_image}
      title: #{@title}
      url: #{@url}
      backend: #{@backend}
      frontend: #{@frontend}
      description: #{@description}
      TEXT

      puts text
    end

    private
      def print_image
        Catpix::print_image @image,
          limit_x: 1.0,
          limit_y: 0,
          center_x: true,
          center_y: true,
          bg: "white",
          bg_fill: true,
          resolution: "high"
      end

  end

  draftbox = Product.new(title: "DraftBox",
    image: "/Users/dashi/pictures/draftbox.png",
    backend: ["Rails", "Heroku"],
    frontend: ["jQuery", "Marked.js"],
    description: "オンラインMarkdownメモサービス")

  twesume = Product.new(title: "TWESUME ~ みんなのTwitter履歴書 ~",
    image: "/Users/dashi/pictures/twesume.png",
    backend: ["Rails", "Heroku"],
    frontend: ["jQuery", "Bootstrap", "html2canvas"],
    description: "ポートフォリオでアピールするTwitter転職支援サービス")
  products = [draftbox, twesume]

  products.each do |product|
    product.display
  end
  `,
  blog: `blog code`,
  contact: `divider = "=" * 50
puts divider
puts "お問い合わせは Twitterアカウント(@dashi296) のDMへお願いいたします。"
puts divider
`,
};

export default EditorData;

