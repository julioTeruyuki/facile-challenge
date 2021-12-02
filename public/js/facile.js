$(document).ready(function() {

    var lastScrollTop = 0

    function lista() {
        $.ajax({
            type: 'GET',
            url: '/facile'
        }).done(function(lista) {
    
            let html = ''
            lista.forEach(list => {
    
                html += `
                    <div class="card ">
                        <div class="card-body">
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="mt-2">Mensagem: <span class="name${list.id}">${list.encripted_name}</span></h4>
                                    <p class="mb-0">ID: <span>${list.id}</span></p>
                                </div>
    
                                <div class="avatar-sm font-size-20 mr-3">
                                    <button class="btn btn-atualizar btn-primary" data-toggle="modal" data-target="#atualizar" codigo="${list.id}" title="Editar Mensagem">
                                        <i class="fa fa-pencil-alt"></i>
                                    </button>
                                </div>
    
                                <div class="avatar-sm font-size-20 mr-3">
                                    <button class="btn btn-deletar btn-danger" codigo="${list.id}" title="Excluir Mensagem">
                                        <i class="fa fa-trash-alt"></i>
                                    </button>
                                </div>
    
                            </div>                                    
                        </div>
                    </div>
                `
            })
    
            $(".listaFacile").html(html)
    
        }).fail(function(error) {
            console.log(error)
            alert("Erro ao pegar Mensagens! Tente novamente.")
        })
    }

    lista()

    $(document).scroll(function() {
        var nowScrollTop = $(this).scrollTop();
        if (nowScrollTop > lastScrollTop){
            $(".scroll-to-top").addClass('show')
        } else {
            $(".scroll-to-top").removeClass('show')
        }
        lastScrollTop = nowScrollTop;
    })

    $(".scroll-to-top").click(function() {
        
        $('html, body').animate({ 
            scrollTop: 0
        }, 500);
    })

    $(".btn-cadastrar").click(function() {
        var name = $(".name").val()
        if (name == '') {
            alert("Digite a mensagem")
            return false
        }

        setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: '/facile',
                data: {
                    name: name
                }
            }).done(function(dados) {
    
                let html = `
                    <div class="card ">
                        <div class="card-body">
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="mt-2">Mensagem: <span class="name${dados.id}">${dados.encripted_name}</span></h4>
                                    <p class="mb-0">ID: <span>${dados.id}</span></p>
                                </div>

                                <div class="avatar-sm font-size-20 mr-3">
                                    <button class="btn btn-atualizar btn-primary" data-toggle="modal" data-target="#atualizar" codigo="${dados.id}" title="Editar Mensagem">
                                        <i class="fa fa-pencil-alt"></i>
                                    </button>
                                </div>

                                <div class="avatar-sm font-size-20 mr-3">
                                    <button class="btn btn-deletar btn-danger" codigo="${dados.id}" title="Excluir Mensagem">
                                        <i class="fa fa-trash-alt"></i>
                                    </button>
                                </div>

                            </div>                                    
                        </div>
                    </div>
                `
                $(".name").val("")
    
                $(".listaFacile").append(html)
            }).fail(function(error) {
                console.log(error)
                alert("Erro ao cadastrar Dados! Tente novamente.")
            })
        })
    })

    $(document).on("click", ".btn-deletar", function() {

        var id = $(this).attr("codigo")

        $.ajax({
            type: 'DELETE',
            url: `/facile/${id}`
        }).done(function(dados) {

            if (dados.code == 200) {
                lista()
            } else {
                console.log(dados)
                alert("Erro ao deletar! Tente novamente.")
            }

        }).fail(function(error) {
            console.log(error)
            alert("Erro ao deletar! Tente novamente.")
        })
    })

    $(document).on("click", ".btn-atualizar", function() {

        var id = $(this).attr("codigo")

        $.ajax({
            type: 'GET',
            url: `/facile/${id}`
        }).done(function(dados) {


            $("#nameAt").val(dados.encripted_name)
            $(".btn-salvar").attr("codigo", dados.id)

        }).fail(function(error) {
            console.log(error)
            alert("Erro ao pegar Dados! Tente novamente!")

            setTimeout(function() {
                $(".sair").trigger("click")
            }, 500)
        })

    })

    $(".btn-salvar").click(function() {

        var id = $(this).attr("codigo")
        var name = $("#nameAt").val()

        $.ajax({
            type: 'PUT',
            url: `/facile`,
            data: {
                name: name,
                id: id
            }
        }).done(function() {
            lista()

            $(".sair").trigger("click")

        }).fail(function(error) {
            console.log(error)
            alert("Erro ao atualizar Mensagem! Tente novamente!")
        })
    })
}) 