function _$fh(_$kt, _$c3, _$hZ, _$gD) {
    console.log("调用VM函数_$fh")
    var _$ke;

    var _$aG;

    var _$jQ;

    var _$gn;

    var _$_o;

    var _$it;

    var _$_e;

    var _$iB;

    var _$dx;

    var _$fd;

    var _$jM;

    var _$f3;

    var _$jE;

    var _$hm;

    var _$iT;


    _$iB = _$kt._$$V;
    _$dx = _$gD[2];
    _$fd = _$gD[3];
    _$jM = _$gD[0];
    _$f3 = _$gD[1];
    _$jE = _$al._$$e();
    _$hm = 0;
    
    for (_$ke = _$c3; _$ke < _$hZ; _$ke++) {
      _$aG = _$iB[_$ke];
      console.log("位置_$fh _$aG = "+_$aG)
      ab = ab + 1;
    //   if(ab >= 30990 && _$aG == 3) {
    //     debugger
        var T_$jE = {}
        try {
                T_$jE = JSON.stringify(_$jE, function (key, value) { if (value == window) { return "window_obj" } return value })
                console.log("值AB: "+ab +" 值T_$jE: " + T_$jE)
            } catch (err) {
                console.log("值AB: "+ab +" 值T_$jE: " + T_$jE.toString())
            }
       //}
    //   if(quence.length < 12){
    //     quence.push(_$aG);
    //   }else if(quence.length == 12){
    //     let stop = isSequenceEqual(quence,figers)
    //     if(stop){
    //       debugger
    //     }else{
    //       updateSequence(quence,_$aG)
    //     }
    //   }

      if (_$aG <= 63) {
        if (_$aG <= 15) {
          if (_$aG <= 3) {
            if (_$aG <= 0) {
              _$_o = _$jE[--_$hm];
              _$_o = _$jE[--_$hm] + _$_o;
              _$jE[_$hm++] = _$_o;
            } else {
              if (_$aG <= 1) {
                _$_o = _$jE[--_$hm];
                _$_o = _$jE[--_$hm] * _$_o;
                _$jE[_$hm++] = _$_o;
              } else {
                if (_$aG <= 2) {
                  _$_e = _$iB[++_$ke];
                  _$iT = _$jE.slice(_$hm - _$_e, _$hm);
                  _$hm -= _$_e;

                  _$bm();

                  _$jE[_$hm++] = _$jl(_$jQ[_$gn], _$iT);
                } else {
                  _$_o = _$jE[--_$hm];
                  _$gD[4] = 1;
                  _$gD[5] = _$_o;
                  _$ke = _$hZ;
                }
              }
            }
          } else {
            if (_$aG <= 7) {
              if (_$aG <= 4) {
                _$_e = _$iB[++_$ke];
                _$ke -= _$_e;
              } else {
                if (_$aG <= 5) {
                  _$jE[_$hm++] = _$jM[_$iB[++_$ke]];
                } else {
                  if (_$aG <= 6) {
                    _$gn = _$iB[++_$ke];
                    _$jQ = _$ac;
                  } else {
                    _$bm();

                    _$jE[_$hm++] = _$jQ[_$gn]();
                  }
                }
              }
            } else {
              if (_$aG <= 11) {
                if (_$aG <= 8) {
                  _$hm -= 2;
                  _$_o = _$hm;

                  _$bm();

                  _$_o = _$jQ[_$gn](_$jE[_$_o], _$jE[_$_o + 1]);
                } else {
                  if (_$aG <= 9) {
                    _$hm -= 2;
                    _$_o = _$hm;

                    _$bm();

                    _$jQ = _$jQ[_$gn];
                    _$_o = _$jQ(_$jE[_$_o], _$jE[_$_o + 1]);
                  } else {
                    if (_$aG <= 10) {
                      _$jE[_$hm++] = _$dj[_$iB[++_$ke]];
                    } else {
                      _$_o = _$jE[--_$hm];
                      _$_o = _$jE[--_$hm] != _$_o;
                      _$jE[_$hm++] = _$_o;
                    }
                  }
                }
              } else {
                if (_$aG <= 12) {
                  _$jE[_$hm++] = _$iB[++_$ke];
                } else {
                  if (_$aG <= 13) {
                    _$jE[_$hm++] = [];
                  } else {
                    if (_$aG <= 14) {
                      _$iB[_$ke] = 12;
                      _$gn = _$iB[++_$ke];
                      _$_o = _$h3[_$gn];
                      _$iB[_$ke] = _$_o;
                      _$jE[_$hm++] = _$_o;
                    } else {
                      _$_o = _$jE[--_$hm];

                      _$bm();

                      _$_o = _$jQ[_$gn] += _$_o;
                    }
                  }
                }
              }
            }
          }
        } else {
          if (_$aG <= 31) {
            if (_$aG <= 19) {
              if (_$aG <= 16) {
                _$it = _$iB[++_$ke];
                _$jE[_$hm++] = _$f3[_$it][_$iB[++_$ke]];
              } else {
                if (_$aG <= 17) {
                  _$jE[_$hm++] = _$ac[_$iB[++_$ke]];
                } else {
                  if (_$aG <= 18) {
                    _$_o = _$jE[--_$hm];
                    _$_o = _$jE[--_$hm] - _$_o;
                    _$jE[_$hm++] = _$_o;
                  } else {
                    _$_o = _$jE[--_$hm];

                    _$bm();

                    _$_o = _$jQ[_$gn] |= _$_o;
                  }
                }
              }
            } else {
              if (_$aG <= 23) {
                if (_$aG <= 20) {
                  _$_o = _$jE[--_$hm];
                  _$jE[_$hm++] = !_$_o;
                } else {
                  if (_$aG <= 21) {
                    _$gn = _$jE[--_$hm];
                    _$jQ = _$jE[--_$hm];
                  } else {
                    if (_$aG <= 22) {
                      _$_o = _$jE[--_$hm];
                      _$_o = _$jE[--_$hm] < _$_o;
                      _$jE[_$hm++] = _$_o;
                    } else {
                      _$hm--;
                      _$_o = _$hm;

                      _$bm();

                      _$jE[_$hm++] = _$jQ[_$gn](_$jE[_$_o]);
                    }
                  }
                }
              } else {
                if (_$aG <= 27) {
                  if (_$aG <= 24) {
                    _$jE[_$hm++] = false;
                  } else {
                    if (_$aG <= 25) {
                      _$hm -= 2;
                      _$_o = _$hm;

                      _$bm();

                      _$jE[_$hm++] = _$jQ[_$gn](_$jE[_$_o], _$jE[_$_o + 1]);
                    } else {
                      if (_$aG <= 26) {
                        _$_o = _$jE[--_$hm];
                        _$jQ = _$jE[--_$hm];
                        _$jE[_$hm++] = _$jQ[_$_o];
                      } else {
                        _$jE[_$hm++] = true;
                      }
                    }
                  }
                } else {
                  if (_$aG <= 28) {
                    _$hm -= 3;
                    _$_o = _$hm;

                    _$bm();

                    _$jQ = _$jQ[_$gn];
                    _$_o = _$jQ(_$jE[_$_o], _$jE[_$_o + 1], _$jE[_$_o + 2]);
                  } else {
                    if (_$aG <= 29) {
                      _$hm--;
                      _$_o = _$hm;

                      _$bm();

                      _$jQ = _$jQ[_$gn];
                      _$_o = _$jQ(_$jE[_$_o]);
                    } else {
                      if (_$aG <= 30) {
                        _$it = _$iB[++_$ke];
                        _$jE[_$hm++] = _$fd[_$it][_$iB[++_$ke]];
                      } else {
                        _$_o = _$jE[--_$hm];
                        _$_o = _$jE[--_$hm] === _$_o;
                        _$jE[_$hm++] = _$_o;
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (_$aG <= 47) {
              if (_$aG <= 35) {
                if (_$aG <= 32) {
                  _$_o = _$jE[--_$hm];
                  _$_o = _$jE[--_$hm] & _$_o;
                  _$jE[_$hm++] = _$_o;
                } else {
                  if (_$aG <= 33) {
                    _$gn = _$iB[++_$ke];
                    _$jQ = _$dx;
                  } else {
                    if (_$aG <= 34) {
                      _$bm();

                      _$jQ = _$jQ[_$gn];
                      _$jE[_$hm++] = _$jQ();
                    } else {
                      _$gn = _$iB[++_$ke];
                      _$_o = _$jE[--_$hm];
                      !_$_o ? (_$ke += _$gn, ++_$hm) : 0;
                    }
                  }
                }
              } else {
                if (_$aG <= 39) {
                  if (_$aG <= 36) {
                    _$hm--;
                    _$_o = _$hm;

                    _$bm();

                    _$_o = _$jQ[_$gn](_$jE[_$_o]);
                  } else {
                    if (_$aG <= 37) {
                      _$iB[_$ke] = 80;
                      _$gn = _$dZ[_$iB[++_$ke]];
                      _$iB[_$ke] = _$gn;
                      _$_o = _$jE[--_$hm];
                      _$jE[_$hm++] = _$_o[_$gn];
                    } else {
                      if (_$aG <= 38) {
                        _$gD[4] = 2;
                        _$ke = _$hZ;
                      } else {
                        _$_o = typeof _$jE[--_$hm];
                        _$jE[_$hm++] = _$_o;
                      }
                    }
                  }
                } else {
                  if (_$aG <= 43) {
                    if (_$aG <= 40) {
                      _$_o = _$jQ[_$gn]++;
                    } else {
                      if (_$aG <= 41) {
                        _$_o = _$jE[--_$hm];
                        _$jQ = _$jE[_$hm - 1];

                        _$jQ.push(_$_o);
                      } else {
                        if (_$aG <= 42) {
                          _$_o = _$jE[--_$hm];
                          _$jQ = _$jE[_$hm - 1];
                          _$jQ[_$h3[_$iB[++_$ke]]] = _$_o;
                        } else {
                          _$gn = _$iB[++_$ke];
                          _$_o = _$jE[--_$hm];
                          _$_o ? (_$ke += _$gn, ++_$hm) : 0;
                        }
                      }
                    }
                  } else {
                    if (_$aG <= 44) {
                      _$_o = _$jE[--_$hm];
                      _$jQ = _$jE[_$hm - 1];
                      _$jQ[_$dZ[_$iB[++_$ke]]] = _$_o;
                    } else {
                      if (_$aG <= 45) {
                        _$_o = _$jE[--_$hm];
                        _$_o = _$jE[--_$hm] in _$_o;
                        _$jE[_$hm++] = _$_o;
                      } else {
                        if (_$aG <= 46) {
                          _$_o = _$jE[--_$hm];
                          _$_o = _$jE[--_$hm] !== _$_o;
                          _$jE[_$hm++] = _$_o;
                        } else {
                          _$jk(_$kt, _$iB[++_$ke], _$iB[++_$ke], _$_e = _$iB[++_$ke], _$iB[++_$ke], _$ke + 1, _$dx, _$gD);

                          _$gD[4] ? _$ke = _$hZ : _$ke += _$_e;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              if (_$aG <= 51) {
                if (_$aG <= 48) {
                  _$hm -= 2;
                  _$_o = _$hm;

                  _$bm();

                  _$jQ = _$jQ[_$gn];
                  _$jE[_$hm++] = _$jQ(_$jE[_$_o], _$jE[_$_o + 1]);
                } else {
                  if (_$aG <= 49) {
                    _$iB[_$ke] = 79;
                    _$gn = _$dZ[_$iB[++_$ke]];
                    _$iB[_$ke] = _$gn;
                    _$jQ = _$jE[--_$hm];
                  } else {
                    if (_$aG <= 50) {
                      _$jE[_$hm++] = {};
                    } else {
                      _$jE[_$hm++] = _$dx[_$iB[++_$ke]];
                    }
                  }
                }
              } else {
                if (_$aG <= 55) {
                  if (_$aG <= 52) {
                    _$_o = _$jE[--_$hm];

                    _$bm();

                    _$jQ[_$gn] = _$_o;
                  } else {
                    if (_$aG <= 53) {
                      _$gn = _$iB[++_$ke];
                      _$jQ = _$dj;
                    } else {
                      if (_$aG <= 54) {
                        _$bm();

                        _$jQ = _$jQ[_$gn];
                        _$_o = _$jQ();
                      } else {
                        _$gn = _$iB[++_$ke];
                        _$jQ = _$jM;
                      }
                    }
                  }
                } else {
                  if (_$aG <= 59) {
                    if (_$aG <= 56) {
                      _$gn = _$iB[++_$ke];
                      _$jE[_$hm++] = _$b3(_$kt._$$$[_$gn], _$gD);
                    } else {
                      if (_$aG <= 57) {
                        _$_o = _$jE[--_$hm];
                        _$_o = _$jE[--_$hm] > _$_o;
                        _$jE[_$hm++] = _$_o;
                      } else {
                        if (_$aG <= 58) {
                          _$_o = _$jE[--_$hm];
                          _$_o = _$jE[--_$hm] == _$_o;
                          _$jE[_$hm++] = _$_o;
                        } else {
                          _$_e = _$iB[++_$ke];
                          _$ke += _$_e;
                        }
                      }
                    }
                  } else {
                    if (_$aG <= 60) {
                      _$hm--;
                      _$_o = _$hm;

                      _$bm();

                      _$jQ = _$jQ[_$gn];
                      _$jE[_$hm++] = _$jQ(_$jE[_$_o]);
                    } else {
                      if (_$aG <= 61) {
                        if(t61 == 16){
                            debugger
                        }
                        _$_o = _$jE[--_$hm];
                        _$_e = _$iB[++_$ke];
                        _$_o ? 0 : _$ke += _$_e;
                      } else {
                        if (_$aG <= 62) {
                          _$it = _$iB[++_$ke];
                          _$gn = _$iB[++_$ke];
                          _$jQ = _$fd[_$it];
                        } else {
                          _$iB[_$ke] = 12;
                          _$gn = _$iB[++_$ke];
                          _$_o = _$gh[_$gn];
                          _$iB[_$ke] = _$_o;
                          _$jE[_$hm++] = _$_o;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (_$aG <= 79) {
        if (_$aG <= 67) {
          if (_$aG <= 64) {
            _$jE[_$hm++] = null;
          } else {
            if (_$aG <= 65) {
              _$bm();

              _$_o = _$jQ[_$gn]();
            } else {
              if (_$aG <= 66) {
                _$_o = _$jE[--_$hm];
                _$_o = _$jE[--_$hm] instanceof _$_o;
                _$jE[_$hm++] = _$_o;
              } else {
                _$_o = _$jE[--_$hm];

                _$bm();

                _$_o = _$jQ[_$gn] ^= _$_o;
              }
            }
          }
        } else if (_$aG <= 71) {
          if (_$aG <= 68) {
            _$_o = _$jE[--_$hm];
            _$_o = _$jE[--_$hm] | _$_o;
            _$jE[_$hm++] = _$_o;
          } else {
            if (_$aG <= 69) {
              _$gn = _$iB[++_$ke];
              _$_o = _$_o[_$gn];
            } else {
              if (_$aG <= 70) {
                _$_o = _$jE[--_$hm];

                _$bm();

                _$_o = _$jQ[_$gn] -= _$_o;
              } else {
                _$hm -= 3;
                _$_o = _$hm;

                _$bm();

                _$_o = _$jQ[_$gn](_$jE[_$_o], _$jE[_$_o + 1], _$jE[_$_o + 2]);
              }
            }
          }
        } else if (_$aG <= 75) {
          if (_$aG <= 72) {
            --_$hm;
            _$jQ = _$jE;
            _$gn = _$hm;
          } else if (_$aG <= 73) {
            _$_e = _$iB[++_$ke];
            _$_o = _$jE[--_$hm];
            _$ke++;

            for (_$it in _$_o) {
              _$jQ[_$gn] = _$it;

              _$fh(_$kt, _$ke, _$ke + _$_e, _$gD);

              if (_$gD[4]) {
                _$ke = _$hZ;
                break;
              }
            }

            _$ke += _$_e - 1;
          } else if (_$aG <= 74) {
            _$_o = _$jE[--_$hm];
            _$_o = _$jE[--_$hm] % _$_o;
            _$jE[_$hm++] = _$_o;
          } else {
            _$hm -= 3;
            _$_o = _$hm;

            _$bm();

            _$jE[_$hm++] = _$jQ[_$gn](_$jE[_$_o], _$jE[_$_o + 1], _$jE[_$_o + 2]);
          }
        } else if (_$aG <= 76) {
          _$gn = _$iB[++_$ke];
          _$jE[_$hm++] = _$_o[_$gn];
        } else {
          if (_$aG <= 77) {
            _$it = _$iB[++_$ke];
            _$gn = _$iB[++_$ke];
            _$jQ = _$f3[_$it];
          } else {
            if (_$aG <= 78) {
              _$hm -= 3;
              _$_o = _$hm;

              _$bm();

              _$jQ = _$jQ[_$gn];
              _$jE[_$hm++] = _$jQ(_$jE[_$_o], _$jE[_$_o + 1], _$jE[_$_o + 2]);
            } else {
              _$gn = _$iB[++_$ke];
              _$jQ = _$jE[--_$hm];
            }
          }
        }
      } else if (_$aG <= 95) {
        if (_$aG <= 83) {
          if (_$aG <= 80) {
            _$gn = _$iB[++_$ke];
            _$_o = _$jE[--_$hm];
            _$jE[_$hm++] = _$_o[_$gn];
          } else {
            if (_$aG <= 81) {
              _$gn = _$iB[++_$ke];
              _$_o = _$jE[--_$hm];
              !_$_o ? _$ke += _$gn : 0;
            } else {
              if (_$aG <= 82) {
                _$_e = _$iB[++_$ke];
                _$hm -= _$_e;
                _$iT = _$jE.slice(_$hm, _$hm + _$_e);

                _$bm();

                _$jE[_$hm++] = _$jQ[_$gn].apply(_$jQ, _$iT);
              } else {
                _$_o = delete _$jQ[_$gn];
              }
            }
          }
        } else {
          if (_$aG <= 87) {
            if (_$aG <= 84) {
              _$jE[_$hm++] = _$jQ[_$gn]++;
            } else {
              if (_$aG <= 85) {
                _$_o = ++_$jQ[_$gn];
              } else {
                if (_$aG <= 86) {
                  _$_o = _$jE[--_$hm];
                  _$_o = _$jE[--_$hm] / _$_o;
                  _$jE[_$hm++] = _$_o;
                } else {
                  _$_o = _$jE[--_$hm];
                  _$_o = _$jE[--_$hm] >>> _$_o;
                  _$jE[_$hm++] = _$_o;
                }
              }
            }
          } else {
            if (_$aG <= 91) {
              if (_$aG <= 88) {
                _$_e = _$iB[++_$ke];
                _$hm -= _$_e;
                _$iT = _$jE.slice(_$hm, _$hm + _$_e);

                _$bm();

                _$jQ = _$jQ[_$gn];
                _$_o = _$jQ.apply(_$ed, _$iT);
              } else {
                if (_$aG <= 89) {
                  _$_o = _$jE[--_$hm];
                  _$_o = _$jE[--_$hm] <= _$_o;
                  _$jE[_$hm++] = _$_o;
                } else {
                  if (_$aG <= 90) {
                    _$_o = _$jQ[_$gn]--;
                  } else {
                    _$_o = -_$jE[--_$hm];
                    _$jE[_$hm++] = _$_o;
                  }
                }
              }
            } else {
              if (_$aG <= 92) {
                _$gn = _$iB[++_$ke];
                _$_o = _$jE[--_$hm];
                _$_o = _$_o[_$gn];
              } else {
                if (_$aG <= 93) {
                  _$_o = _$jE[--_$hm];
                  _$_o = _$jE[--_$hm] >= _$_o;
                  _$jE[_$hm++] = _$_o;
                } else {
                  if (_$aG <= 94) {
                    _$_e = _$iB[++_$ke];
                    _$hm -= _$_e;
                    _$iT = _$jE.slice(_$hm, _$hm + _$_e);

                    _$bm();

                    _$_o = _$jQ[_$gn].apply(_$jQ, _$iT);
                  } else {
                    _$_o = _$jE[--_$hm];
                    _$jE[_$hm++] = ~_$_o;
                  }
                }
              }
            }
          }
        }
      } else if (_$aG <= 99) {
        if (_$aG <= 96) {
          _$_e = _$iB[++_$ke];
          _$hm -= _$_e;
          _$iT = _$jE.slice(_$hm, _$hm + _$_e);

          _$bm();

          _$jQ = _$jQ[_$gn];
          _$jE[_$hm++] = _$jQ.apply(_$ed, _$iT);
        } else if (_$aG <= 97) {
          _$iB[_$ke] = 80;
          _$gn = _$h3[_$iB[++_$ke]];
          _$iB[_$ke] = _$gn;
          _$_o = _$jE[--_$hm];
          _$jE[_$hm++] = _$_o[_$gn];
        } else if (_$aG <= 98) {
          _$iB[_$ke] = 79;
          _$gn = _$h3[_$iB[++_$ke]];
          _$iB[_$ke] = _$gn;
          _$jQ = _$jE[--_$hm];
        } else debugger;
      } else if (_$aG <= 103) {
        if (_$aG <= 100) {
          _$_o = _$iB[++_$ke];
        } else {
          if (_$aG <= 101) {
            _$_o = _$jE[--_$hm];
            _$_o = _$jE[--_$hm] << _$_o;
            _$jE[_$hm++] = _$_o;
          } else {
            if (_$aG <= 102) {
              _$_e = _$iB[++_$ke];
              _$iT = _$jE.slice(_$hm - _$_e, _$hm);
              _$hm -= _$_e;

              _$bm();

              _$_o = _$jl(_$jQ[_$gn], _$iT);
            } else {
              _$_o = _$jE[--_$hm];
              _$gn = _$iB[++_$ke];
              _$jQ = _$bH[_$gn];
              _$_e = _$jQ[_$_o];
              _$_e == _$fW ? _$_e = _$iB[++_$ke] : ++_$ke;
              _$ke += _$_e;
            }
          }
        }
      } else {
        if (_$aG <= 104) {
          _$_o = _$jE[--_$hm];

          _$bm();

          _$jQ[_$gn] = _$_o;
          _$jE[_$hm++] = _$_o;
        } else {
          if (_$aG <= 105) {
            _$_o = _$jE[--_$hm];
            _$_o = _$jE[--_$hm] ^ _$_o;
            _$jE[_$hm++] = _$_o;
          } else {
            _$_o = _$jE[--_$hm];

            _$bm();

            _$_o = _$jQ[_$gn] &= _$_o;
          }
        }
      }
    }

    _$al._$_n(_$jE);

    function _$bm() {
        var _$kt;
      
        _$kt = _$iB[++_$ke];
      
        if (_$kt <= 49) {
          if (_$kt <= 6) {
            _$gn = _$iB[++_$ke];
            _$jQ = _$ac;
          } else {
            if (_$kt <= 21) {
              _$gn = _$jE[--_$hm];
              _$jQ = _$jE[--_$hm];
            } else {
              if (_$kt <= 33) {
                _$gn = _$iB[++_$ke];
                _$jQ = _$dx;
              } else {
                _$iB[_$ke] = 79;
                _$gn = _$dZ[_$iB[++_$ke]];
                _$iB[_$ke] = _$gn;
                _$jQ = _$jE[--_$hm];
              }
            }
          }
        } else {
          if (_$kt <= 72) {
            if (_$kt <= 53) {
              _$gn = _$iB[++_$ke];
              _$jQ = _$dj;
            } else {
              if (_$kt <= 55) {
                _$gn = _$iB[++_$ke];
                _$jQ = _$jM;
              } else {
                if (_$kt <= 62) {
                  _$it = _$iB[++_$ke];
                  _$gn = _$iB[++_$ke];
                  _$jQ = _$fd[_$it];
                } else {
                  --_$hm;
                  _$jQ = _$jE;
                  _$gn = _$hm;
                }
              }
            }
          } else {
            if (_$kt <= 77) {
              _$it = _$iB[++_$ke];
              _$gn = _$iB[++_$ke];
              _$jQ = _$f3[_$it];
            } else {
              if (_$kt <= 79) {
                _$gn = _$iB[++_$ke];
                _$jQ = _$jE[--_$hm];
              } else {
                _$iB[_$ke] = 79;
                _$gn = _$h3[_$iB[++_$ke]];
                _$iB[_$ke] = _$gn;
                _$jQ = _$jE[--_$hm];
              }
            }
          }
        }
      }
  }